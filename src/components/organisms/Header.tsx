'use client';
import React from 'react';
import Image from 'next/image';
import HamburgerLogo from '@/assets/icon/etc/Hamburger.svg';
import HeaderLogo from '@/assets/img/header-logo.png';
import HeaderItem from '@/components/molecules/HeaderItem';
import { useResponsive } from '@/hooks/useResponsive';

const Header: React.FC = () => {
  const { isMobile } = useResponsive();

  if (isMobile) {
    return (
      <header className="sticky bg-white shadow-md w-[100vw] h-[100px] p-8">
        <div className="container mx-auto flex justify-around items-center px-4">
          <HamburgerLogo />
          <Image src={HeaderLogo} alt="Header Logo" width={100} height={100} />
        </div>
      </header>
    );
  }

  return (
    <header className="sticky bg-white shadow-md w-[100vw] h-[100px] p-8">
      <div className="container mx-auto flex justify-around items-center px-4">
        <Image src={HeaderLogo} alt="Header Logo" width={180} height={100} />
        <nav className="space-x-10">
          <HeaderItem href="#services" title="제휴기업 서비스"></HeaderItem>
          <HeaderItem href="#services" title="회사소개"></HeaderItem>
          <HeaderItem href="#services" title="아프지마 소식"></HeaderItem>
          <HeaderItem href="#services" title="제휴문의"></HeaderItem>
          <HeaderItem href="#services" title="인재채용"></HeaderItem>
        </nav>
      </div>
    </header>
  );
};

export default Header;
