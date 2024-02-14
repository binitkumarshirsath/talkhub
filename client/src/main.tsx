import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import { AuthContextProvider } from "./context/auth-context.tsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChatContextProvider } from "./context/chat-context.tsx";
import { SocketContextProvider } from "./context/socket-context.tsx";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <SocketContextProvider>
          <ChatContextProvider>
            <RouterProvider router={router} />
          </ChatContextProvider>
        </SocketContextProvider>
      </AuthContextProvider>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
