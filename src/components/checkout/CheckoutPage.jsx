import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import PaymentWidget from "./PaymentWidget";
import Seo from "../Seo/SEO";

export default function CheckoutPage() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 20 }}>
      <Seo
        title="Checkout | Soyempe"
        description="Finaliza tu inversión en el crecimiento de tu marca o negocio con Soyempe. Completa tu compra de forma segura y accede a nuestros servicios diseñados para cualquier emprendedor o empresa."
        url="https://www.www.soyempe.com/checkout"
      />
      {!userId ? (
        <RegisterForm onUserCreated={(id) => setUserId(id)} />
      ) : (
        <>
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>
            Estás un paso mas cerca.
          </h2>
          <PaymentWidget userId={userId} />
        </>
      )}
    </div>
  );
}
