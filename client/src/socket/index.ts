import { io } from "socket.io-client";

const BACKEND_URL = "http://localhost:443";
// const BACKEND_URL = import.meta.env.VITE_BASE_URL;

if (!BACKEND_URL) throw new Error("Backend url is missing.");

export const socket = io(BACKEND_URL);
