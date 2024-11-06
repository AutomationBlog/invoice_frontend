import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_isLOCAL === "true"
      ? import.meta.env.VITE_BACKEND_URL_LOCAL
      : import.meta.env.VITE_BACKEND_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
    "Access-Control-Allow-Credentials": "true",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
