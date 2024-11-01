import React from 'react';
import BackgroundInfoSection from '@/components/organisms/contents/BackgroundInfoSection';
import BackgroundCardSection from '@/components/organisms/contents/BackgroundCardSection';
import BackgroundInfoCardSection from '@/components/organisms/contents/BackgroundInfoCardSection';

export default function Background() {
  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center w-[100vw]">
      <BackgroundInfoSection />
      <BackgroundCardSection />
      <BackgroundInfoCardSection />
    </div>
  );
}
