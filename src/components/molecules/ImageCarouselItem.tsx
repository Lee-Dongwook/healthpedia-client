import React from 'react';
import Image from 'next/image';

export interface ImageCarouselItemProps {
  mainTitle: string;
  subTitle: string;
  content: string;
  src: string;
}

const ImageCarouselItem: React.FC<ImageCarouselItemProps> = ({
  mainTitle,
  subTitle,
  content,
  src,
}) => {
  return (
    <div className="bg-white p-4 shadow rounded-lg">
      <h5 className="text-gray-600 text-sm">{subTitle}</h5>
      <h2 className="text-xl font-bold">{mainTitle}</h2>
      <hr className="my-2" />
      <p className="text-base text-gray-800">{content}</p>
      <div className="w-full h-auto relative">
        <Image
          src={src}
          alt={`ImageCarousel ${subTitle}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
export default ImageCarouselItem;
