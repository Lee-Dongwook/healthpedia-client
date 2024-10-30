'use client';
import React from 'react';
import ImageSwiper from '@/components/organisms/ImageSwiper';
import MainImageCarouselImage from '@/assets/img/MainImageCarousel.png';
import {
  FirstMainImageCarouselContent,
  SecondMainImageCarouselContent,
  ThirdMainImageCarouselContent,
} from '@/lib/MainImageCarouselContent';

const ImageSwiperSection: React.FC = () => {
  const data = [
    {
      id: 1,
      title: '고객 지향적 사고',
      subtitle: 'Customer-centric Thinking',
      descriptionTitle: '고객의 입장에서 생각하고 공감하고 의사 결정하기',
      description: FirstMainImageCarouselContent,
      image: MainImageCarouselImage,
    },
    {
      id: 2,
      title: '도전과 혁신',
      subtitle: 'Challenge & Innovation',
      descriptionTitle: '기존 고정관념 탈피와 도전',
      description: SecondMainImageCarouselContent,
      image: MainImageCarouselImage,
    },
    {
      id: 3,
      title: '상생',
      subtitle: 'Co-prosperity',
      descriptionTitle: '생태계의 구성원들과 함께 성장하기',
      description: ThirdMainImageCarouselContent,
      image: MainImageCarouselImage,
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#F6F6F6]">
      <ImageSwiper data={data} />;
    </div>
  );
};

export default ImageSwiperSection;
