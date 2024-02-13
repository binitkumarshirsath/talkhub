import axios from "axios";

const URL = import.meta.env.VITE_BASE_URL;
if (!URL) throw new Error("Base url missing.");

const apiConnector = axios.create({
  baseURL: URL,
  withCredentials: true,
});

export default apiConnector;
