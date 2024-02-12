import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";
import { errorResponse } from "./type";

export const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("User logged in successfully.");
      setAuth(data.data.user);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      navigate("/");
    },
    onError: ({ response }: errorResponse) => {
      toast.error(response?.data.message);
    },
  });
};
