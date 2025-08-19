import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { BasicInputProps } from "@/shared/types/index";
import BasicInput from "../atoms/BasicInput";

type PasswordFieldProps = BasicInputProps & {
  label: string;
  error?: string;
};

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  id,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    // Default: flex-col (mobile). md:flex-row (desktop)
    <div className="flex flex-col md:flex-row w-full md:items-center md:gap-4">
      {/* Label: Punya margin bawah di mobile, lebar tetap di desktop */}
      <label
        htmlFor={id}
        className="mb-2 md:mb-0 md:w-24 text-sm font-medium text-gray-700 text-left"
      >
        {label}
      </label>
      <div className="relative flex-1">
        <BasicInput
          id={id}
          type={showPassword ? "text" : "password"}
          hasError={!!error}
          className="pr-10"
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default PasswordField;
