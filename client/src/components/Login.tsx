import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { login } from "../api/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth-context";

export type LoginInputs = {
  userName: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    try {
      const response = await login(data);
      if (response.data.success) {
        toast.success("Logged in");
        localStorage.setItem("userId", response.data._id);
        localStorage.setItem("token", response.data.token);
        setAuth(response.data._id);
        navigate("/");
      }
    } catch (error) {
      console.error("Error while logging in...", error);
      // toast.error(error?.response?.data?.message);p
    }
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
      >
        Login
      </button>
    </form>
  );
};

export default Login;
