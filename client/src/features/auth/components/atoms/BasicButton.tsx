import React from "react";
import { BasicButtonProps } from "@/shared/types/index";
import { classNameMerge } from "@/shared/utils/classMerge";

// Tambahkan 'active' ke tipe variant
const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  className,
  type = "button",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none";
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-5 text-lg",
  };

  const variants = {
    // Tombol abu-abu saat tidak aktif atau disabled
    primary: "bg-gray-200 text-gray-500 cursor-not-allowed",
    // Tombol kuning saat aktif
    active: "bg-yellow-400 text-black hover:bg-yellow-500",
    outline: "border border-gray-300 bg-white text-black hover:bg-gray-100",
    ghost: "text-black hover:bg-gray-100",
  };

  // Logika yang disederhanakan:
  // Jika tombol disabled, paksa gunakan variant 'primary'.
  // Jika tidak, gunakan variant yang diberikan (bisa 'active' atau lainnya).
  const finalVariant = disabled ? "primary" : variant;

  const buttonClassName = classNameMerge(
    base,
    sizes[size],
    variants[finalVariant], // Gunakan finalVariant di sini
    fullWidth ? "w-full" : "",
    className
  );

  return (
    <button
      type={type}
      className={buttonClassName}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default BasicButton;
