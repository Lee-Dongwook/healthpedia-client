'use client';

import React from 'react';
import HeroInfoSection from '@/components/organisms/contents/HeroInfoSection';
import AppDownloadSection from '@/components/organisms/contents/AppDownloadSection';
import HeroInfoCardSection from '@/components/organisms/contents/HeroInfoCardSection';

const Hero: React.FC = () => {
  return (
    <section className="bg-white text-center mt-3 p-20">
      <HeroInfoSection />
      <AppDownloadSection />
      <HeroInfoCardSection />
    </section>
  );
};

export default Hero;
