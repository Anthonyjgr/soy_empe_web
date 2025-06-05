import axios from 'axios';

const instance = axios.create({
  // production
  // baseURL: import.meta.env.VITE_REACT_APP_API_BASE_URL, 
  // development
  baseURL: "http://localhost:3000",
  withCredentials: true, // Permite el envío automático de cookies HTTPOnly
});

// Interceptor para agregar headers comunes (API keys)
instance.interceptors.request.use(
  (config) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiSecret = import.meta.env.VITE_API_SECRET;

    // if (!apiKey || !apiSecret) {
    //   console.error("Faltan claves de API en las variables de entorno.");
    //   return Promise.reject(new Error("Faltan claves de API"));
    // }

    // // Headers comunes
    // config.headers['x-api-key'] = apiKey;
    // config.headers['x-api-secret'] = apiSecret;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;