import React from 'react';
import { BasicCheckboxProps } from '@/shared/types/index';
import { classNameMerge } from '@/shared/utils/classMerge';

const BasicCheckbox: React.FC<BasicCheckboxProps> = ({ label, className, id, ...props }) => {
  return (
    <div className={classNameMerge("flex items-center gap-2", className)}>
      <input
        type="checkbox"
        id={id}
        {...props}
        className="h-4 w-4 accent-yellow-400 text-white rounded border-gray-300 focus:ring-yellow-500 cursor-pointer"
      />
      {label && <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">{label}</label>}
    </div>
  );
};

export default BasicCheckbox;