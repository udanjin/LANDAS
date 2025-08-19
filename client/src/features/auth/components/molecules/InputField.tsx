import React from "react";
import { BasicInputProps } from "@/shared/types/index";
import BasicInput from "../atoms/BasicInput";

type InputFieldProps = BasicInputProps & {
  label: string;
  error?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  error,
  ...props
}) => {
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
      <div className="flex-1">
        <BasicInput id={id} hasError={!!error} {...props} />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default InputField;
