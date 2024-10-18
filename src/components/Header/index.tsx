"use client";

import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">아프지마</div>
        <nav className="space-x-4">
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            제휴기업 서비스
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            회사소개
          </Link>
          <Link href="#" className="text-gray-600 hover:text-blue-600">
            아프지마 소식
          </Link>
        </nav>
      </div>
    </header>
  );
}
