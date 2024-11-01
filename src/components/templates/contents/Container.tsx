'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ContainerSection from '@/components/organisms/contents/ContainerSection';

const Container = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = ref.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      .from(element, { yPercent: 0, opacity: 1 })
      .to(element, { yPercent: 100, opacity: 0 });

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
      className="bg-white min-h-[600px] flex flex-col justify-center items-center text-center p-20"
    >
      <ContainerSection />
    </section>
  );
};

export default Container;
