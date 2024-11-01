'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PhoneFeatureDisplay from '@/components/organisms/contents/PhoneFeatureDisplaySection';
import FirstToShowPhoneImage from '@/assets/img/Phone 3.png';
import SecondToShowPhoneImage from '@/assets/img/Phone 4.png';

const FirstPhoneFeatureDisplayData = [
  {
    imageInfo: {
      src: FirstToShowPhoneImage,
      alt: 'First Phone Image',
      direction: 'right',
    },
    text: {
      category: '위치기반',
      title: '지금 내 주변 도수 치료 가능한 병원은 어디?',
      subtitle: '가까운 거리, 가능한 병원, 지금 바로.',
      content:
        '비급여 진료과목을 선택하면 위치 기반으로 현재 내 위치에서 가장 가까운 병원을 찾을 수 있어요.',
    },
  },
  {
    imageInfo: {
      src: SecondToShowPhoneImage,
      alt: 'Second Phone Image',
      direction: 'left',
    },
    text: {
      category: '야간병원',
      title: '야간/주말 진료 가능 병원과 약국을 한눈에 확인해보세요',
      subtitle: '야간에도, 주말에도, 진료 가능한.',
      content:
        '현재 위치에서 가장 가까운 거리순으로 야간에도 주말에도 진료 가능한 병원 및 약국을 한눈에 조회 할 수 있어요.',
    },
  },
];

const SecondPhone = () => {
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
      .to(element, { yPercent: 50, opacity: 0 });

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.killAll();
      }
    };
  }, []);

  return (
    <section ref={ref} style={{ position: 'relative', zIndex: 1 }}>
      <PhoneFeatureDisplay {...FirstPhoneFeatureDisplayData[0]} />;
      <PhoneFeatureDisplay {...FirstPhoneFeatureDisplayData[1]} />;
    </section>
  );
};

export default SecondPhone;
