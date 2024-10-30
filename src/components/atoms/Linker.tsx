import React from 'react';
import Link from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Linker: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="text-gray-700 hover:text-gray-900">
      {children}
    </Link>
  );
};

export default Linker;
