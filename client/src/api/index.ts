import axios from "axios";
import { useLogout } from "../hooks/useLogout";

const URL = import.meta.env.VITE_BASE_URL;
if (!URL) throw new Error("Base url missing.");

const apiConnector = axios.create({
  baseURL: URL,
  withCredentials: true,
});

apiConnector.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return error;
  }
);

apiConnector.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Error", error.response);
    if (error.response && error.response.status === 401) {
      useLogout();
    }
    return Promise.reject(error);
  }
);

export default apiConnector;
