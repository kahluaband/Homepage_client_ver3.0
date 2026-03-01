'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import ChevronDown from '@/public/image/album/ChevronDown.svg';
import ChevronUp from '@/public/image/album/ChevronUp.svg';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Dropdown = ({ options, value, onChange }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const selected = options.find((o) => o.value === value)?.label ?? '';

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="w-[130px] rounded-lg border-[1.5px] border-blue-main bg-gray-0 overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className="flex w-full items-center justify-between px-3 py-2 text-[16px] font-medium text-black hover:bg-gray-1"
      >
        <span className="text-md font-medium">{selected}</span>
        <Image
          src={open ? ChevronUp : ChevronDown}
          alt=""
          width={24}
          height={24}
          className="shrink-0"
        />
      </button>
      {open && (
        <ul className="flex flex-col gap-1 pb-2 pt-1 border-blue-main">
          {options.map((opt) => (
            <li key={opt.value}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                className={`
              w-full px-3 py-2 text-left
              text-[16px] font-medium leading-tight
              transition-colors
              hover:bg-gray-1 hover:text-blue-main
              ${opt.value === value ? 'text-blue-main' : 'text-black'}
            `}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
