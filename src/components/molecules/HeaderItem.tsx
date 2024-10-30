import React from 'react';
import Linker from '@/components/atoms/Linker';

interface HeaderItemProps {
  href: string;
  title: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ href, title }) => {
  return (
    <>
      <Linker href={href}>{title}</Linker>
    </>
  );
};

export default HeaderItem;
