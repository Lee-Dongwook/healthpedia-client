import React from 'react';
import HeaderItem from '@/components/molecules/HeaderItem';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4"></div>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <HeaderItem href="#services" title=""></HeaderItem>
          <HeaderItem href="#services" title=""></HeaderItem>
          <HeaderItem href="#services" title=""></HeaderItem>
          <HeaderItem href="#services" title=""></HeaderItem>
          <HeaderItem href="#services" title=""></HeaderItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
