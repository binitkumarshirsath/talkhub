import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { login } from "../api/auth";
export type LoginInputs = {
  firstName: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    const response = await login(data);
    console.log(response);
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
        name="UserName"
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
        name="Password"
        register={register}
        errors={errors}
        key={4}
        placeholder="Enter password"
      />
      <button
        className="bg-[#7953F7] w-fit rounded-sm font-semibold mt-3 px-4 py-1 text-white"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
