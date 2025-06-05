import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import PaymentWidget from "./PaymentWidget";

export default function CheckoutPage() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
  window.scrollTo({ top: 0});
}, []);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", padding: 20 }}>
      {!userId ? (
        <RegisterForm onUserCreated={(id) => setUserId(id)} />
      ) : (
        <>
          <h2 style={{ textAlign: "center", marginBottom: 20 }}>Estás un paso mas cerca.</h2>
          <PaymentWidget userId={userId} />
        </>
      )}
    </div>
  );
}
