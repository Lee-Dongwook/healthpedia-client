import React from 'react';

interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  variant: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  disabled = false,
  children,
  onClick,
}) => {
  const baseClasses =
    'font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-200';
  const sizeClasses = {
    small: 'text-xs px-6 py-3',
    medium: 'text-sm px-8 py-3.5',
    large: 'text-base px-12 py-4',
  };

  const variantClasses = {
    primary: 'bg-primary text-on-primary',
    secondary: 'bg-default-bg text-default-text',
    ghost: 'bg-transparent-bg text-default-text border border-default-text',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
