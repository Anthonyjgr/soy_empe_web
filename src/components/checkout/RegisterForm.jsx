import { useState } from "react";
import axios from "../../config/axios";

export default function RegisterForm({ onUserCreated }) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    confirmEmail: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState();

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#FFD600",
    color: "black",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
  };

  const formValidation = (form) => {
    const errors = {};

    if (!form.email) {
      errors.email = "El correo es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "El correo no tiene un formato válido";
    }

    if (!form.confirmEmail) {
      errors.confirmEmail = "Debes confirmar el correo electrónico";
    } else if (form.email !== form.confirmEmail) {
      errors.confirmEmail = "El correo electrónico no coincide";
    }

    if (!form.name) {
      errors.name = "El nombre es requerido";
    }
    if (!form.lastName) {
      errors.lastName = "El apellido es requerido";
    }
    if (!form.phone) {
      errors.phone = "El número de contacto es requerido";
    }

    return errors;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const baseUrl = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const errors = formValidation(form);

    if (Object.keys(errors).length > 0) {
      setFormError(errors);
      setLoading(false);
      return;
    }

    const formData = {
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
    };

    try {
      const res = await axios.post(`${baseUrl}/api/masterclass-users/create`, formData);
      onUserCreated(res.data.userId);
    } catch (err) {
      setError(err.response?.data?.message || "Error creando usuario");
    }
    setLoading(false);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      style={{
        maxWidth: 400,
        margin: "20px auto",
        padding: 20,
        backgroundColor: "#f9fafb",
        borderRadius: 8,
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Registro para Masterclass UGC Para Todos
      </h2>
      {error && <p style={{ color: "red", marginBottom: 12 }}>{error}</p>}
      <input
        name="name"
        placeholder="Nombre"
        onChange={handleChange}
        style={inputStyle}
      />
      {formError?.name && <label style={errorStyle}>{formError?.name}</label>}

      <input
        name="lastName"
        placeholder="Apellido"
        onChange={handleChange}
        style={inputStyle}
      />
      {formError?.lastName && <label style={errorStyle}>{formError?.lastName}</label>}
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        onChange={handleChange}
        style={inputStyle}
      />
      {formError?.email && <label style={errorStyle}>{formError?.email}</label>}
      <input
        type="email"
        name="confirmEmail"
        placeholder="Confirmar correo electrónico"
        onChange={handleChange}
        style={inputStyle}
        onPaste={(e) => e.preventDefault()} // bloquea pegar
        onCopy={(e) => e.preventDefault()} // opcional: bloquea copiar
        onCut={(e) => e.preventDefault()} // opcional: bloquea cortar
      />
      {formError?.confirmEmail && (
        <label style={errorStyle}>{formError?.confirmEmail}</label>
      )}
      <input
        name="phone"
        placeholder="Teléfono"
        onChange={handleChange}
        style={inputStyle}
      />
      {formError?.phone && <label style={errorStyle}>{formError?.phone}</label>}
      <button type="submit" disabled={loading} style={buttonStyle}>
        {loading ? "Registrando..." : "Registrar y Continuar"}
      </button>
    </form>
  );
}
