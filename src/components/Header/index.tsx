"use client";

import React from "react";
import Image from "next/image";
import HeaderLogo from "@/assets/img/header-logo.png";
import NavLink from "@/common/NavLink";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Image src={HeaderLogo} alt="Header Logo" />
        <nav className="space-x-4">
          <NavLink href="#" className="text-gray-600 hover:text-blue-600">
            제휴기업 서비스
          </NavLink>
          <NavLink href="#" className="text-gray-600 hover:text-blue-600">
            회사소개
          </NavLink>
          <NavLink href="#" className="text-gray-600 hover:text-blue-600">
            아프지마 소식
          </NavLink>
          <NavLink href="#" className="text-gray-600 hover:text-blue-600">
            제휴문의
          </NavLink>
          <NavLink href="#" className="text-gray-600 hover:text-blue-600">
            인재채용
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
