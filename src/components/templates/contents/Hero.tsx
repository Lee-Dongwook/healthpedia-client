'use client';

import React from 'react';
import AppDownloadButton from '@/components/molecules/AppDownloadButton';

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
    </section>
  );
};

export default Hero;
