import React from 'react';
import DocumentImage from '@/assets/img/Document.png';
import FirstInsuserImage from '@/assets/img/Insuser1.png';
import SecondInsuserImage from '@/assets/img/Insuser2.png';
import AppServiceImage from '@/assets/img/AppService.png';
import ImageTextPairSection from '@/components/organisms/contents/ImageTextPairSection';

const FirstImageArray = [{ src: DocumentImage, alt: 'First Array Image' }];
const SecondImageArray = [
  { src: FirstInsuserImage, alt: 'Second Array First Image' },
  { src: SecondInsuserImage, alt: 'Second Array Second Image' },
];
const ThirdImageArray = [{ src: AppServiceImage, alt: 'Third Array Image' }];

const FirstImageArrayDescription = {
  title: '비보장 의료 서비스, 가격 찾기부터',
  subtitle: '제휴 병원에 이르기까지',
  content:
    '아프지마는 더욱 현명한 의료 서비스를 선택할 수 있도록 도와드립니다. 더 이상 비용에 대한 혼란을 겪지 마세요. 단 몇 번의 클릭만으로 가까운 병원을 비교하고 선택하실 수 있습니다.',
};
const SecondImageArrayDescription = {
  title: '실손 보험 청구',
  subtitle: '조회부터 상담, 병원비 돌려받기를 간편하게',
  content:
    '여러분의 보험이 충분히 보장되는지 쉽게 확인하고, 전문가의 추천을 받고, 손쉽게 청구서를 제출하세요. 아프지마는 병원 찾기부터 의료비 회수까지 모든 단계를 단순화합니다.',
};
const ThirdImageArrayDescription = {
  title: '건강 상태를 확인하고',
  subtitle: '최신 정보를 받아 보세요',
  content:
    '정기적인 건강 정보를 받고 여러분의 필요에 맞는 귀중한 콘텐츠를 받아보세요. 스트레스 관리부터 다이어트 조언까지 아프지마는 고객의 웰빙을 최우선으로 관리하는 데 도움을 줍니다.',
};

const ImagePair = () => {
  return (
    <div className="w-full h-[4000px] flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mt-40 -mb-40">손끝에서 즐기는 의료</h1>
        <ImageTextPairSection
          images={FirstImageArray}
          description={FirstImageArrayDescription}
        />
        <ImageTextPairSection
          images={SecondImageArray}
          description={SecondImageArrayDescription}
        />
        <ImageTextPairSection
          images={ThirdImageArray}
          description={ThirdImageArrayDescription}
        />
      </div>
    </div>
  );
};

export default ImagePair;
