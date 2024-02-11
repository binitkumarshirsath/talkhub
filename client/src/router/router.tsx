import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
