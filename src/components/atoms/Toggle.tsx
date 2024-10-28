'use client';
import React, { useState, useEffect } from 'react';
import CheckIcon from '@/assets/icon/essentials/Check.svg';

interface ToggleProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  disabled = false,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChangeToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <label
      className={`flex cursor-pointer select-none items-center ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChangeToggle}
          disabled={disabled}
          className="sr-only"
        />
        <div
          className={`block h-8 w-14 rounded-full ${isChecked ? ' bg-blue-500' : 'bg-[#E5E7EB]'}`}
        >
          {isChecked ? <CheckIcon className="w-4 h-4 text-white m-auto" /> : ''}
        </div>
        <div
          className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition transform ${isChecked ? 'translate-x-6 bg-[#E5E7EB]' : ''}`}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
