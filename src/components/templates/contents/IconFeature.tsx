import React from 'react';
import CreditGradeCheckImage from '@/assets/img/CreditGradeCheck.png';
import CreditGradeUpImage from '@/assets/img/CreditGradeUp.png';
import AlarmImage from '@/assets/img/Alarm.png';
import BulbImage from '@/assets/img/Bulb.png';
import TextContent from '@/components/molecules/content/TextContent';
import IconFeatureDisplay from '@/components/organisms/contents/IconFeatureDisplay';

const TextContentData = {
  category: '병원 진료',
  title: '내 주변 병원 정보를 한눈에 알아보세요',
};

const IconFeatureDisplayDataList = [
  {
    icon: CreditGradeCheckImage,
    title: '병원 진료 가격 확인',
    description:
      '언제 어디서든, 원할 때 간편하게 전국 병원들의 진료 과목별 가격 정보를 한 곳에서 확인할 수 있어요.',
  },
  {
    icon: CreditGradeUpImage,
    title: '병원비 비교',
    description:
      '가격순, 거리순으로 병원비를 간편하게 비교해보세요. 내 주변에서 합리적인 진료를 받을 수 있는 병원을 쉽게 찾을 수 있어요.',
  },
  {
    icon: AlarmImage,
    title: '위치 기반 병원 찾기',
    description:
      '내 주변 병원 위치를 기반으로, 야간이나 주말에도 가능한 병원을 빠르게 검색할 수 있어요.',
  },
  {
    icon: BulbImage,
    title: '건강관리 팁',
    description:
      '건강 관리가 궁금하다면? 분야 별로 건강 관련 콘텐츠를 읽어보세요.',
  },
];

const IconFeature = () => {
  return (
    <section className="bg-white min-h-[600px] flex flex-col justify-center p-20">
      <TextContent {...TextContentData} />
      <div className="ml-72 grid grid-cols-2 grid-rows-2 gap-6 p-10">
        <IconFeatureDisplay {...IconFeatureDisplayDataList[0]} />
        <IconFeatureDisplay {...IconFeatureDisplayDataList[1]} />
        <IconFeatureDisplay {...IconFeatureDisplayDataList[2]} />
        <IconFeatureDisplay {...IconFeatureDisplayDataList[3]} />
      </div>
    </section>
  );
};

export default IconFeature;
