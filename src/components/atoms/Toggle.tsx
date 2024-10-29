'use client';
import React, { useState, useEffect } from 'react';
import CheckIcon from '@/assets/icon/essentials/Check.svg';
import EllipseIcon from '@/assets/icon/etc/Ellipse.svg';

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
          className={`block h-6 w-16 rounded-full ${isChecked ? ' bg-blue-500' : 'bg-white border border-primary'}`}
        >
          {isChecked ? (
            <CheckIcon className="w-5 h-5 text-white ml-1 mt-0.25" />
          ) : (
            <EllipseIcon className="w-5 h-5 mr-1 mt-0.25" />
          )}
        </div>
        <div
          className={`dot absolute left-1 top-0.5 h-5 w-5 rounded-full transition transform ${isChecked ? 'translate-x-9 bg-white' : 'bg-primary'}`}
        ></div>
      </div>
    </label>
  );
};

export default Toggle;
