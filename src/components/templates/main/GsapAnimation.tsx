/* eslint-disable @next/next/no-img-element */
'use client';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const sectionGroup = [
  '/img/MainSection.png',
  '/img/MainSection2.png',
  '/img/MainSection3.png',
  '/img/MainSection4.png',
  '/img/MainSection5.png',
  '/img/MainSection6.png',
];

const GsapAnimation = () => {
  const sectionGroupRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const sectionGroupPanels = sectionGroupRef.current.filter(
      Boolean
    ) as HTMLDivElement[];
    sectionGroupPanels.forEach(panel => {
      gsap.fromTo(
        panel,
        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 1,
          scale: 1,
          ease: 'power2.inOut',
          duration: 10,
          scrollTrigger: {
            trigger: panel,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col">
      {sectionGroup.map((image, idx) => (
        <div
          key={idx}
          ref={e => {
            sectionGroupRef.current[idx] = e;
          }}
          className="relative w-screen h-screen overflow-hidden"
        >
          <img
            src={image}
            alt={`Section Group Image ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="end"></div>
    </div>
  );
};

export default GsapAnimation;
