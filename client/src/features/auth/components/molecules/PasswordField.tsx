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
    <div className="flex flex-col md:flex-row w-full md:items-center md:gap-4">
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
          className="pr-10" // Add right padding to make space for the icon
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center justify-center w-10 h-full text-gray-400 hover:text-gray-600"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        {error && (
          <p className="mt-1 ml-2 text-xs text-red-500 text-left">{error}</p>
        )}
      </div>
    </div>
  );
};

export default PasswordField;
