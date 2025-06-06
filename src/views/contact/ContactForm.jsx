import { useState } from "react";
import axios from "../../config/axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(null);

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    maxWidth: "400px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  };

  const formValidation = (form) => {
    const errors = {};

    if (!form.name) {
      errors.name = "El nombre es requerido";
    }
    if (!form.lastName) {
      errors.lastName = "El apellido es requerido";
    }
    if (!form.email) {
      errors.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "El correo no tiene un formato válido";
    }
    if (!form.message) {
      errors.message = "El mensaje es requerido";
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormError({});
    setSuccessMsg(null);
    setError(null);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    const errors = formValidation(form);
    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      setLoading(false);
      return;
    }

    try {
      await axios.post("/api/contact/form", form);
      setSuccessMsg("Mensaje enviado correctamente.");
      setForm({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      setError(err.response?.data?.message || "Error enviando el mensaje");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <form
        noValidate
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          backgroundColor: "#FFD600",
          borderRadius: 8,
          width:"100%",
          maxWidth: 450,
          margin: "0 auto",
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20 }}>Formulario de Contacto</h2>
        {error && <p style={{ color: "red", marginBottom: 12 }}>{error}</p>}
        {successMsg && (
          <p style={{ color: "black", marginBottom: 12, fontWeight: "bold" }}>
            {successMsg}
          </p>
        )}

        <input
          name="name"
          placeholder="Nombre *"
          onChange={handleChange}
          style={inputStyle}
          value={form.name}
        />
        {formError.name && <label style={errorStyle}>{formError.name}</label>}

        <input
          name="lastName"
          placeholder="Apellido *"
          onChange={handleChange}
          style={inputStyle}
          value={form.lastName}
        />
        {formError.lastName && <label style={errorStyle}>{formError.lastName}</label>}

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico *"
          onChange={handleChange}
          style={inputStyle}
          value={form.email}
        />
        {formError.email && <label style={errorStyle}>{formError.email}</label>}

        <input
          name="phone"
          placeholder="Teléfono (opcional)"
          onChange={handleChange}
          style={inputStyle}
          value={form.phone}
        />

        <textarea
          name="message"
          placeholder="Mensaje *"
          onChange={handleChange}
          style={{ ...inputStyle, height: "100px", resize: "vertical" }}
          value={form.message}
        />
        {formError.message && <label style={errorStyle}>{formError.message}</label>}

        <button type="submit" disabled={loading} style={buttonStyle}>
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
