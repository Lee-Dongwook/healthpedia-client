'use client';
import React, { useRef, useEffect } from 'react';
import CheckIcon from '@/assets/icon/essentials/Check.svg';

interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  label,
  disabled = false,
  onChange,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      className={`flex items-center space-x-2 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <div className="relative w-6 h-6 border border-gray-300 rounded">
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="opacity-0 absolute inset-0"
          disabled={disabled}
        />
        {checked && <CheckIcon className="text-white fill-current" />}
      </div>

      {label && (
        <span className={` ${disabled ? 'text-gray-500' : 'text-gray-700'}`}>
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
