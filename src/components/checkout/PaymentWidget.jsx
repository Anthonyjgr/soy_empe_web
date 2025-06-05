import { useEffect, useState } from "react";
import axios from "../../config/axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const PUBLIC_KEY = "APP_USR-e2d5c031-4b82-4883-9ca9-012b0c752f47";

export default function PaymentWidget({ userId }) {
  const [preferenceId, setPreferenceId] = useState(null);
  
    const baseUrl= "http://localhost:3000"
    const price=100

  useEffect(() => {
    initMercadoPago(PUBLIC_KEY, { locale: "es-CL" });
  }, []);

  const startPayment = async () => {
    try {
      const res = await axios.post("/api/payments/create", {
        title: "Masterclass UGC Para Todos",
        quantity: 1,
        unit_price: price,
        userId,
      });
      setPreferenceId(res.data.id);
    } catch {
      alert("Error creando preferencia de pago");
    }
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#FFD600",
    color: "black",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    marginTop: 20,
  };

  return (
    <div style={{ textAlign: "center", marginTop: 30 }}>
      {!preferenceId ? (
        <button onClick={startPayment} style={buttonStyle}>
          {`Confirmar monto $${price} CLP`}
        </button>
      ) : (
        <Wallet initialization={{ preferenceId }} />
      )}
    </div>
  );
}
