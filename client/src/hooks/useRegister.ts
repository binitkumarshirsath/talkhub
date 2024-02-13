import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/auth";
import toast from "react-hot-toast";
import { errorResponse } from "../types";

export const useRegister = () => {
  return useMutation({
    mutationFn: signup,
    onSuccess: () => {
      toast.success("User created successfully");
    },
    onError: (err: errorResponse) => {
      toast.error(err.response.data.message);
    },
  });
};
