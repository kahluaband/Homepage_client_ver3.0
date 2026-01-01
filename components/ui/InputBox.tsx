import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <input
        className={`flex h-12 w-[282px] rounded-xl border border-gray-15 px-4 py-3 text-[16px] font-normal focus:outline-none focus:border-primary-40 focus:outline-[1px] ${className}`}
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
