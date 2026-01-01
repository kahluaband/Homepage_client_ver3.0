import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const ModalInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, ...props }, ref) => {
    return (
      <input
        className={`flex h-12 w-[280px] pad:w-[588px] rounded-xl border border-gray-15 px-4 py-3 text-[16px] font-normal focus:outline-none focus:border-gray-40 focus:outline-[1px] ${className}`}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

ModalInput.displayName = 'ModalInput';

export { ModalInput };
