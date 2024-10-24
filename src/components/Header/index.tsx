"use client";

import React from "react";
import HeaderLogo from "@/assets/img/header-logo.png";
import HeaderImage from "@/ui/HeaderImage";
import HeaderLayout from "@/layout/HeaderLayout";
import HeaderLink from "@/ui/HeaderLink";

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderImage src={HeaderLogo} alt="Header Logo" />
      <nav className="space-x-8">
        <HeaderLink href="#">제휴기업 서비스</HeaderLink>
        <HeaderLink href="#">회사소개</HeaderLink>
        <HeaderLink href="#">아프지마 소식</HeaderLink>
        <HeaderLink href="#">제휴문의</HeaderLink>
        <HeaderLink href="#">인재채용</HeaderLink>
      </nav>
    </HeaderLayout>
  );
}
