import React from 'react';

interface ButtonProps {
  size: 'small' | 'medium' | 'large' | 'g-small' | 'g-medium' | 'g-large';
  variant: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  variant = 'primary',
  disabled = false,
  children,
  onClick,
}) => {
  const baseClasses =
    'font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all ease-in-out duration-200';
  const sizeClasses = {
    'g-small': 'w-[45px] h-[45px]',
    'g-medium': 'w-[52px] h-[52px]',
    'g-large': 'w-[59px] h-[59px]',
    small: 'w-[86px] h-[45px] text-xs px-6 py-3',
    medium: 'w-[125px] h-[52px] text-sm px-8 py-3.5',
    large: 'w-[145px] h-[59px] text-base px-12 py-4',
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
