import React from "react";

interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  assistiveText?: boolean;
  disabled?: boolean;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  placeholder = "Type something",
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
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className=""
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {icon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
      </div>
      {assistiveText && (
        <p
          className={`mt-2 text-sm ${error ? "text-red-600" : "text-gray-600"}`}
        >
          {assistiveText}
        </p>
      )}
    </div>
  );
};

export default Input;
