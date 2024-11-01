'use client';

import { motion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';

interface AnimatedImageProps {
  src: string | StaticImageData;
  alt: string;
  direction: 'left' | 'right' | string;
}

const AnimatedImage = ({ src, alt, direction }: AnimatedImageProps) => {
  const variants = {
    hidden: { x: direction === 'right' ? 500 : -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', duration: 5 },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <Image src={src} alt={alt} width={500} height={800} layout="responsive" />
    </motion.div>
  );
};

export default AnimatedImage;
