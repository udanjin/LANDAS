import React from 'react';
import { BasicInputProps } from '@/shared/types/index';
import { classNameMerge } from '@/shared/utils/classMerge';

type ExtendedInputProps = BasicInputProps & {
  hasError?: boolean;
};

const BasicInput = React.forwardRef<HTMLInputElement, ExtendedInputProps>(
  ({ className, fullWidth = false, hasError = false, ...props }, ref) => {
    const inputClassName = classNameMerge(
      'h-12 w-full rounded-xl border bg-gray-100 px-4 text-base placeholder-gray-400 outline-none transition-colors',
      // Logika untuk warna border:
      // Jika error, border merah. Jika tidak, border kuning saat fokus.
      hasError ? 'border-red-500' : 'border-gray-100 focus:border-yellow-400',
      fullWidth ? 'w-full' : '',
      className
    );
    return <input className={inputClassName} ref={ref} {...props} />;
  }
);

export default BasicInput;