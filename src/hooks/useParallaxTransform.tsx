'use client';
import { useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import type { Dimension } from './useWindowSize';

interface ParallaxTransforms {
  galleryRef: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
  y2: MotionValue<number>;
  y3: MotionValue<number>;
  y4: MotionValue<number>;
}

export const useParallaxTransform = (
  dimension: Dimension
): ParallaxTransforms => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  return { galleryRef, y, y2, y3, y4 };
};

export default useParallaxTransform;
