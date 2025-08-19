import React from 'react';

export type BasicButtonProps = {
  children?: React.ReactNode;
  // Tambahkan 'active' ke dalam list variant yang valid
  variant?: 'primary' | 'outline' | 'ghost' | 'active'; 
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  id?: string;
  title?: string;
  type?: 'button' | 'submit' | 'reset';
};

export type BasicInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  fullWidth?: boolean;
};

export type BasicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};