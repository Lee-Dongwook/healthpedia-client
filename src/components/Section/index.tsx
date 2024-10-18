import React from "react";
import Image from "next/image";
import Phone1 from "@/assets/img/Phone 1.png";
import Phone2 from "@/assets/img/Phone 2.png";
import Phone3 from "@/assets/img/Phone 3.png";
import Phone4 from "@/assets/img/Phone 4.png";

export default function Section() {
  return (
    <div className="bg-blue-500 max-h-full overflow-visible flex flex-col items-center">
      <div className="flex gap-4 mt-8">
        <Image
          src={Phone1}
          alt="sample"
          width={300}
          height={400}
          className="rounded-lg"
        />
        <Image
          src={Phone2}
          alt="sample"
          width={300}
          height={400}
          className="rounded-lg"
        />
        <Image
          src={Phone3}
          alt="sample"
          width={300}
          height={400}
          className="rounded-lg"
        />
        <Image
          src={Phone4}
          alt="sample"
          width={300}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="py-12 text-center">
        <h1 className="text-white text-3xl font-bold">
          기업 의료 복지도 아프지마와 함께
        </h1>
        <p className="text-white mt-4">
          임직원 의료비 걱정도 별도 비용 부담 없이 이제 아프지마와 함께하세요.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-10 mt-12 mb-40 text-white max-w-5xl mx-auto">
        <div className="bg-white/10 p-4 rounded-md">
          <h2 className="font-extrabold">파트너십 대시보드</h2>
          <p className="mt-4 text-gray-300">
            병원비용, 직원 건강 통찰력, 파트너 사용 통계에 대한 실시간 데이터를
            제공합니다.
          </p>
        </div>
        <div className="bg-white/10 p-4 rounded-md">
          <h2 className="font-extrabold">직원 혜택 확대</h2>
          <p className="mt-4 text-gray-300">
            회사에 비보장 의료 서비스를 직원 혜택 패키지에 통합하여 의료 비용
            절감을 장려하는 방법을 제공합니다.
          </p>
        </div>
        <div className="bg-white/10 p-4 rounded-md">
          <h2 className="font-extrabold">보험 통합</h2>
          <p className="mt-4 text-gray-300">
            플랫폼을 통해 직접 실손 보험 청구 프로세스를 단순화하고 기업
            파트너를 위한 맞춤형 솔루션을 제공합니다.
          </p>
        </div>
        <div className="bg-white/10 p-4 rounded-md">
          <h2 className="font-extrabold">전담 콘텐츠 제공</h2>
          <p className="mt-4 text-gray-300">
            제휴 기업 담당자를 통해 주 1회 생활습관 관리를 위한 건강정보
            콘텐츠를 제공합니다.
          </p>
        </div>
        <button className="bg-blue-600 w-36 h-12 ml-4 rounded-lg">
          가맹점 문의하기
        </button>
        <button className="bg-blue-600 w-36 h-12 ml-4 rounded-lg">
          자세히 알아보기
        </button>
        <button className="bg-blue-600 w-36 h-12 ml-4 rounded-lg">
          홈페이지 바로가기
        </button>
        <button className="bg-blue-600 w-36 h-12 ml-4 rounded-lg">
          홈페이지 바로가기
        </button>
      </div>
    </div>
  );
}
