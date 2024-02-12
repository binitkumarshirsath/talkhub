/* eslint-disable @typescript-eslint/no-explicit-any */
interface CustomInputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  placeholder: string;
  required: boolean;
  type?: string;
  validationSchema: any;
}

const CustomInput = ({
  name,
  label,
  register,
  errors,
  required,
  type,
  validationSchema,
}: CustomInputProps) => (
  <>
    <label htmlFor={name}>
      {label}
      {required && <sup className="text-red-500">*</sup>}
    </label>
    <input
      className="py-1 px-4 mb-4 text-black border-2 border-[#7953F7] bg-[#cbbcf9]  outline-none focus:outline-[#7953F7] rounded-lg"
      id={name}
      name={name}
      type={type}
      {...register(name, validationSchema)}
    />
    {errors && errors[name]?.type === "required" && (
      <span className="error text-red-500 mt-1">{errors[name]?.message}</span>
    )}
    {errors && errors[name]?.type === "minLength" && (
      <span className="text-red-500 mt-1">{errors[name]?.message}</span>
    )}
  </>
);

export default CustomInput;
