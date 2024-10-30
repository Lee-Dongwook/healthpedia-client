import React from 'react';
import Linker from '@/components/atoms/Linker';

interface HeaderItemProps {
  href: string;
  title: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ href, title }) => {
  return (
    <li>
      <Linker href={href}>{title}</Linker>
    </li>
  );
};

export default HeaderItem;
