import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";

import { useLogin } from "../hooks/useLogin";
import { Loader } from "lucide-react";

export type LoginInputs = {
  userName: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const { mutateAsync, isPending } = useLogin();

  const onSubmit: SubmitHandler<LoginInputs> = async (params) => {
    await mutateAsync(params);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-4 flex flex-col w-3/6  "
    >
      <CustomInput
        required
        validationSchema={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Please Enter a minimum of 3 character",
          },
        }}
        label="Username"
        name="userName"
        register={register}
        errors={errors}
        key={3}
        placeholder="Enter a unique username..."
      />
      <CustomInput
        required
        validationSchema={{
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Please Enter a minimum of 3 character",
          },
        }}
        label="Password"
        name="password"
        register={register}
        errors={errors}
        key={4}
        placeholder="Enter password"
      />
      <button
        className="bg-[#7953F7] w-fit rounded-sm font-semibold mt-3 px-4 py-1 text-white"
        type="submit"
        disabled={isPending}
      >
        {isPending ? <Loader className="animate-spin" /> : "Login"}
      </button>
    </form>
  );
};

export default Login;
