import React from 'react';
import type { StaticImageData } from 'next/image';
import AnimatedImage from '@/components/atoms/AnimatedImage';
import PhoneTextContent from '@/components/molecules/content/PhoneTextContent';

interface PhoneFeatureDisplayProps {
  imageInfo: {
    src: string | StaticImageData;
    alt: string;
    direction: 'left' | 'right' | string;
  };
  text: {
    category: string;
    title: string;
    subtitle?: string;
    content: string;
  };
}

const PhoneFeatureDisplay = ({ imageInfo, text }: PhoneFeatureDisplayProps) => {
  return (
    <div
      className={`flex ${imageInfo.direction === 'right' ? 'flex-row-reverse' : 'flex-row'} justify-center items-center space-x-6`}
    >
      <div className="w-1/4 h-1/2">
        <AnimatedImage {...imageInfo} />
      </div>
      <PhoneTextContent {...text} />
    </div>
  );
};

export default PhoneFeatureDisplay;
