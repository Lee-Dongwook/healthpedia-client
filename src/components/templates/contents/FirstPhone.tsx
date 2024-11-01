import PhoneFeatureDisplay from '@/components/organisms/contents/PhoneFeatureDisplaySection';
import FirstToShowPhoneImage from '@/assets/img/Phone 2.png';
import SecondToShowPhoneImage from '@/assets/img/Phone 1.png';

const FirstPhoneFeatureDisplayData = [
  {
    imageInfo: {
      src: FirstToShowPhoneImage,
      alt: 'First Phone Image',
      direction: 'right',
    },
    text: {
      category: '가격정보',
      title: '병원 진료 가격, 항목별로 합리적이게',
      content:
        '전국 71,000개 병원의 500개 항목의 가격 정보를 쉽게 확인하세요. 필요한 진료 과목별 가격을 한눈에 볼 수 있어요.',
    },
  },
  {
    imageInfo: {
      src: SecondToShowPhoneImage,
      alt: 'Second Phone Image',
      direction: 'left',
    },
    text: {
      category: '병원별 가격 정보',
      title: '내 주변 병원비, 거리와 가격 순으로 간편하게',
      content:
        '내 주변 500m에서 5km까지 병원의 가격정보를 거리순, 가격순으로 한 번에 비교할 수 있어요.',
    },
  },
];

const FirstPhone = () => {
  return (
    <>
      <PhoneFeatureDisplay {...FirstPhoneFeatureDisplayData[0]} />;
      <PhoneFeatureDisplay {...FirstPhoneFeatureDisplayData[1]} />;
    </>
  );
};

export default FirstPhone;
