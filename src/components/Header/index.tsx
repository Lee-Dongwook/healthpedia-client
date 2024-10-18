"use client";

import React from "react";
import NavLink from "@/common/NavLink";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">아프지마</div>
        <nav className="space-x-4">
          <NavLink href="#">제휴기업 서비스</NavLink>
          <NavLink href="#">회사소개</NavLink>
          <NavLink href="#">아프지마 소식</NavLink>
        </nav>
      </div>
    </header>
  );
}
