import axios from "axios";
import toast from "react-hot-toast";

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
    if (error.response && error.response.status === 401) {
      toast.error("Unauthorized access");
      localStorage.clear();
      window.location.replace("/auth");
    }
    return Promise.reject(error);
  }
);

export default apiConnector;
