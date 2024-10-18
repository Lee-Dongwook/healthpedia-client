"use client";

import React from "react";
import HeaderLogo from "@/assets/img/header-logo.png";
import HeaderImage from "@/common/HeaderImage";
import HeaderLink from "@/common/HeaderLink";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <HeaderImage src={HeaderLogo} alt="Header Logo" />
        <nav className="space-x-8">
          <HeaderLink href="#" className="hover:text-blue-600">
            제휴기업 서비스
          </HeaderLink>
          <HeaderLink href="#" className="hover:text-blue-600">
            회사소개
          </HeaderLink>
          <HeaderLink href="#" className="hover:text-blue-600">
            아프지마 소식
          </HeaderLink>
          <HeaderLink href="#" className="hover:text-blue-600">
            제휴문의
          </HeaderLink>
          <HeaderLink href="#" className="hover:text-blue-600">
            인재채용
          </HeaderLink>
        </nav>
      </div>
    </header>
  );
}
