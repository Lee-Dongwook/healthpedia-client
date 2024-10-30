import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Linker: React.FC<LinkProps> = ({ href = '/', children }) => {
  return (
    <Link href={href} className="font-medium text-[#494949]">
      {children}
    </Link>
  );
};

export default Linker;
