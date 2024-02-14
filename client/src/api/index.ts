import axios from "axios";

import { useLogout } from "../hooks/useLogout";

const URL = import.meta.env.VITE_BASE_URL;
if (!URL) throw new Error("Base url missing.");

const apiConnector = axios.create({
  baseURL: URL,
  withCredentials: true,
});

apiConnector.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("Error", error.response);
    if (error.response && error.response.status === 404) {
      console.log("iran");
      useLogout();
    }
    return Promise.reject(error);
  }
);

export default apiConnector;
