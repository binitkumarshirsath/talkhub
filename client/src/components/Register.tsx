import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import { signup } from "../api/auth";
import toast from "react-hot-toast";

export type RegisterInputs = {
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = async (data) => {
    try {
      const response = await signup(data);
      console.log(response.data);
      if (response.data.success) {
        toast.success("User created successfully. Please signin");
      }
    } catch (err) {
      console.error("Error while signup", err);
      toast.error("Something went wrong.");
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
          required: "FirstName is required",
          minLength: {
            value: 3,
            message: "Please Enter a minimum of 3 character",
          },
          maxLength: {
            value: 7,
            message: "Max length of 7 is allowed.",
          },
        }}
        label="FirstName"
        name="firstName"
        register={register}
        errors={errors}
        key={1}
        placeholder="Enter your firstname .."
      />
      <CustomInput
        required
        validationSchema={{
          required: "LastName is required",
          minLength: {
            value: 3,
            message: "Please Enter a minimum of 3 character",
          },
          maxLength: {
            value: 7,
            message: "Max length of 7 is allowed.",
          },
        }}
        label="LastName"
        name="lastName"
        register={register}
        errors={errors}
        key={2}
        placeholder="Enter your Lastname .."
      />
      <CustomInput
        required
        validationSchema={{
          required: "Username is required",
          minLength: {
            value: 3,
            message: "Please Enter a minimum of 3 character",
            maxLength: {
              value: 7,
              message: "Max length of 7 is allowed.",
            },
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
          maxLength: {
            value: 8,
            message: "Max length of 8 is allowed.",
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
        SUBMIT
      </button>
    </form>
  );
};

export default Register;
