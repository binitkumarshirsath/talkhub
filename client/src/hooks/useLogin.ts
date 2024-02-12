import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success("User logged in successfully.");
      setAuth(data.data?._id);
      localStorage.setItem("token", data.data?.token);
      navigate("/");
    },
    onError: ({
      response,
    }: {
      response: {
        data: {
          message: string;
        };
      };
    }) => {
      console.log(response?.data?.message);
      toast.error(response?.data.message);
    },
  });
};
