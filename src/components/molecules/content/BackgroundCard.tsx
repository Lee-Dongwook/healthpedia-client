import React from 'react';
import Image, { type StaticImageData } from 'next/image';

interface BackgroundCardProps {
  imageUrl: string | StaticImageData;
  overlayColor: string;
  title: string;
  description: string;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  imageUrl,
  overlayColor,
  title,
  description,
}) => {
  return (
    <div className="relative w-[226px] h-[226px]]">
      <Image
        src={imageUrl}
        alt="Background image"
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 bg-${overlayColor} opacity-75`}></div>
      <div className="absolute inset-0 flex justify-start items-end p-4">
        <div className="text-white">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCard;
