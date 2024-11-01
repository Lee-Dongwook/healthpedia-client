'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroInfoSection from '@/components/organisms/contents/HeroInfoSection';
import AppDownloadSection from '@/components/organisms/contents/AppDownloadSection';
import HeroInfoCardSection from '@/components/organisms/contents/HeroInfoCardSection';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: 'bottom top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      .from(element, { yPercent: 0, opacity: 1 })
      .to(element, { yPercent: 50, opacity: 0 });

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.killAll();
      }
    };
  }, []);
  return (
    <section
      ref={ref}
      style={{ position: 'relative', zIndex: 1 }}
      className="bg-white text-center mt-3 p-20"
    >
      <HeroInfoSection />
      <AppDownloadSection />
      <HeroInfoCardSection />
    </section>
  );
};

export default Hero;
