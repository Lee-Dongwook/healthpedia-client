import React from 'react';
import ImageSwiper from '@/components/organisms/main/ImageSwiper';
import { MainImageSwiperData } from '@/lib/MainImageSwiperData';

const ImageSwiperSection: React.FC = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <ImageSwiper data={MainImageSwiperData} />;
    </div>
  );
};

export default ImageSwiperSection;
