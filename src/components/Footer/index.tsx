import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-md py-6">
      <div className="container mx-auto px-6 md:px-20">
        <ul className="flex flex-col gap-1 text-base font-bold text-gray-600 mb-4">
          <li>
            <Link href="#" className="hover:text-gray-800">
              서비스 이용약관
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-800">
              위치기반서비스이용약관
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-800">
              개인정보처리방침
            </Link>
          </li>
        </ul>
        <div className="text-sm text-gray-600 space-y-3">
          <p className="tracking-widest">
            (주)헬스피디아 | 대표이사: 김대이 | 개인정보 관리책임자: 김대이
          </p>
          <p className="tracking-wider">
            서울특별시 중구 퇴계로 36길2, 1014호(필동 2가, 동국대학교 충무로
            영상센터)
          </p>
          <p className="tracking-widest">
            제휴/비급여 가격 변경 등 문의:{" "}
            <Link
              href="mailto:contact@afzima.com"
              className="underline hover:text-gray-800"
            >
              contact@afzima.com
            </Link>{" "}
            | 고객문의:{" "}
            <Link
              href="mailto:cs@afzima.com"
              className="underline hover:text-gray-800"
            >
              cs@afzima.com
            </Link>
          </p>
          <p className="tracking-wide">사업자등록번호: 789-86-02070</p>
          <p className="text-gray-500 mt-4 tracking-wide">
            &copy; {new Date().getFullYear()} afzima Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
