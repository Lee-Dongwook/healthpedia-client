'use client';

import React from 'react';
import ImagePlaceholderImage from '@/assets/img/ImagePlaceholder.png';
import AppDownloadButton from '@/components/molecules/AppDownloadButton';
import InfoCard from '@/components/molecules/content/InfoCard';

const Hero: React.FC = () => {
  return (
    <section className="bg-white text-center mt-3 p-20">
      <h1 className="text-5xl font-bold mb-2">한눈에 알아보는</h1>
      <h1 className="text-5xl font-bold mb-8">건강정보 컨텐츠</h1>
      <p className="text-lg mb-4">&apos;동국대학교 의료진 검증 필&apos;</p>
      <p className="text-lg mb-10">한눈에 건강정보 컨텐츠를 알아보세요</p>
      <div className="mt-16 flex justify-center items-center space-x-20">
        <AppDownloadButton store="google" />
        <AppDownloadButton store="apple" />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-20 mb-10">
        <InfoCard
          imageUrl={ImagePlaceholderImage}
          title="수면"
          description="수면의 질을 향상시키고 수면 장애를 관리하는 팁을 제공합니다."
          linkHref=""
        />
        <InfoCard
          imageUrl={ImagePlaceholderImage}
          title="식이"
          description="균형 잡힌 영양과 식습관에 대한 가이드를 제공합니다."
          linkHref=""
        />
        <InfoCard
          imageUrl={ImagePlaceholderImage}
          title="비만"
          description="체중 관리와 건강한 생활 습관 정보를 제공합니다."
          linkHref=""
        />
        <InfoCard
          imageUrl={ImagePlaceholderImage}
          title="스트레스"
          description="스트레스 완화 및 정신 건강을 위한 자료를 제공합니다."
          linkHref=""
        />
        <InfoCard
          imageUrl={ImagePlaceholderImage}
          title="수면"
          description="신체 건강을 유지하기 위한 운동 루틴과 조언을 제공합니다."
          linkHref=""
        />
      </div>
    </section>
  );
};

export default Hero;
