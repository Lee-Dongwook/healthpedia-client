'use client';
import React, { useRef, useEffect } from 'react';
import CheckIcon from '@/assets/icon/essentials/Check.svg';
import IndeterminateIcon from '@/assets/icon/essentials/Indeterminate.svg';

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
      <div
        className={`relative w-7 h-7 border border-gray-300 rounded ${checked || indeterminate ? 'bg-blue-500' : 'bg-gray-400'}`}
      >
        {checked && <CheckIcon className="text-white ml-0.5" />}
        {indeterminate && <IndeterminateIcon className="text-white ml-0.5" />}
        <input
          type="checkbox"
          ref={checkboxRef}
          checked={checked}
          onChange={e => onChange(e.target.checked)}
          className="opacity-0 absolute inset-0"
          disabled={disabled}
        />
      </div>

      {label && <span className="text-dark-3">{label}</span>}
    </label>
  );
};

export default Checkbox;
