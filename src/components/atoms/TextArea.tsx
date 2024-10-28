import React from 'react';

interface TextareaProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  assistiveText?: boolean;
  disabled?: boolean;
  error?: boolean;
  rows?: number;
}

const TextArea: React.FC<TextareaProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  assistiveText,
  disabled,
  error,
  rows = 3,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          className=""
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
        />
      </div>
      {assistiveText && (
        <p
          className={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-600'}`}
        >
          {assistiveText}
        </p>
      )}
    </div>
  );
};

export default TextArea;
