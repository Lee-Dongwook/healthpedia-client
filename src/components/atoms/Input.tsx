import React from 'react';
import Icon, { icons } from '@/components/atoms/Icon';
import InfoIcon from '@/assets/icon/status/Info.svg';

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: keyof typeof icons;
  assistiveText?: string;
  disabled?: boolean;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder = 'Type something',
  value,
  onChange,
  icon,
  assistiveText,
  disabled,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-mulish text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className="w-[540px] h-[61px] pt-5 pb-5 pl-8 pr-8 border rounded-md"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Icon iconName={icon} />
          </div>
        )}
      </div>
      {assistiveText && (
        <div className="flex">
          <InfoIcon />
          <p
            className={`mt-0.5 ml-2 text-sm ${error ? 'text-red-600' : 'text-blue-600'}`}
          >
            {assistiveText}
          </p>
        </div>
      )}
    </div>
  );
};

export default Input;
