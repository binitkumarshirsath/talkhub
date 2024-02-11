import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { AuthContextProvider } from "./context/auth-context.tsx";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthContextProvider>
  </React.StrictMode>
);
