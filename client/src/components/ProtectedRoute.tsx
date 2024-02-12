import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      return navigate("/auth");
    }
  }, [navigate, auth]);

  return children;
};

export default ProtectedRoute;
