import React from 'react';

interface ToggleProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, disabled }) => {
  return (
    <label
      className={`switch ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        disabled={disabled}
        className=""
      />
      <span className=""></span>
    </label>
  );
};

export default Toggle;
