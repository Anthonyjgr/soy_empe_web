import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; // o el router que uses
import axios from "../../config/axios";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("pending");
  const [message, setMessage] = useState("Verificando estado del pago...");
  const userId = searchParams.get("external_reference"); // o lo que envies en la URL

  useEffect(() => {
    if (!userId) {
      setMessage("ID de usuario no encontrado en la URL.");
      setStatus("error");
      return;
    }

    const checkStatus = async () => {
      try {
        const res = await axios.get(`/api/payments/status/${userId}`);
        setStatus(res.data.status);
        if (res.data.status === "approved") {
          setMessage("¡Pago aprobado! Tu inscripción está confirmada.");
        } else if (res.data.status === "rejected") {
          setMessage("Pago rechazado. Por favor, intenta nuevamente.");
        } else {
          setMessage("Pago pendiente. Espera un momento y vuelve a cargar.");
        }
      } catch {
        setMessage("Error consultando el estado del pago.");
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, [userId]);

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 20,
        textAlign: "center",
        backgroundColor: "#fefefe",
        borderRadius: 8,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Estado del Pago
      </h1>
      <p style={{ fontSize: 18 }}>{message}</p>
    </div>
  );
}
