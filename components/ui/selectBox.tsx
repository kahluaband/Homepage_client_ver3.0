import Image from 'next/image';
import React from 'react';

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  alt: string;
  state: boolean;
}

const SelectBox = React.forwardRef<HTMLButtonElement, InputProps>(
  ({ className, name, alt, state, ...props }, ref) => {
    return (
      <button
        className={`flex flex-row rounded-xl border-[1px] w-[282px] h-12 items-center justify-between px-4 ${state ? 'border-primary-50' : 'border-gray-80'} ${className}`}
        onClick={props.onClick}
        type="button"
        ref={ref}
      >
        <p
          className={`text-start flex items-center font-[16px] text-medium leading-6 w-[282px] h-[48px] ${state ? 'text-primary-50' : 'text-gray-80'}`}
        >
          {name}
        </p>
        {state && (
          <Image
            src="/image/ticket/check.svg"
            width={20}
            height={20}
            alt={alt || 'text'}
            className=""
          />
        )}
      </button>
    );
  }
);
SelectBox.displayName = 'SelectBox';

export { SelectBox };
