'use client';

import React from 'react';
import Image from 'next/image';
import HeroImage from '@/assets/img/Hero-logo.png';
import AppDownloadButton from '@/components/molecules/AppDownloadButton';
import HeroInfoSection from '@/components/organisms/main/HeroInfoSection';
import AppDownloadSection from '@/components/organisms/main/AppDownloadSection';
import HeroImageSection from '@/components/organisms/main/HeroImageSection';
import { useResponsive } from '@/hooks/useResponsive';

const Hero: React.FC = () => {
  const { isMobileTablet } = useResponsive();

  if (isMobileTablet) {
    return (
      <section className="bg-white text-center mt-10 p-20">
        <h1 className="text-4xl font-bold mb-2">병원 가기 전</h1>
        <h1 className="text-4xl font-bold">아프지마로 가격을 비교하세요</h1>
        <div className="flex justify-center items-start">
          <Image src={HeroImage} alt="Hero Image" width={400} height={200} />
        </div>
        <div className="mt-16 flex justify-center items-center space-x-40">
          <AppDownloadButton store="google" />
          <AppDownloadButton store="apple" />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-center mt-3 p-20">
      <HeroInfoSection />
      <AppDownloadSection />
      <HeroImageSection />
    </section>
  );
};

export default Hero;
