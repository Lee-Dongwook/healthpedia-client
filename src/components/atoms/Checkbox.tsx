import React from 'react';

interface CheckboxProps {
  isChecked: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  label,
  disabled,
  onChange,
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={e => onChange(e.target.checked)}
        className="form-checkbox h-5 w-5 text-blue-600 rounded"
        disabled={disabled}
      />
      {label && (
        <span
          className={`text-gray-700 ${disabled ? 'text-gray-400' : 'text-gray-700'}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
