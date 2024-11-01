import React from 'react';
import Image, { type StaticImageData } from 'next/image';

interface IconFeatureDisplayProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
}

const IconFeatureDisplay = ({
  icon,
  title,
  description,
}: IconFeatureDisplayProps) => {
  return (
    <div className="flex flex-col">
      <Image src={icon} alt={title} />
      <h3 className="text-xl mt-8 mb-8">{title}</h3>
      <p className="max-w-sm break-words">{description}</p>
    </div>
  );
};
export default IconFeatureDisplay;
