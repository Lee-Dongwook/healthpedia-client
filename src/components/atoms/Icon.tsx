import React from 'react';
import PasswordHideIcon from '@/assets/icon/essentials/Password-hide.svg';

export const icons: Record<
  string,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  'password-hide': PasswordHideIcon,
};

interface IconProps {
  iconName: keyof typeof icons;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ iconName, className }) => {
  const Icon = icons[iconName];
  if (!Icon) return null;

  return <Icon className={className} />;
};

export default Icon;
