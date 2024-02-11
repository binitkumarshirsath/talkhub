import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
type Inputs = {
  firstName: string;
  lastName: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
        }}
        label="FirstName"
        name="FirstName"
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
        }}
        label="LastName"
        name="LastName"
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
        SUBMIT
      </button>
    </form>
  );
};

export default Register;
