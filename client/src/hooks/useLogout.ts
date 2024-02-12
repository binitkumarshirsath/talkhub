import { useMutation } from "@tanstack/react-query";
import { logout } from "../api/auth";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("Logged out successfully.");
      localStorage.removeItem("token");
      setAuth("");
      navigate("/");
    },
  });
};
