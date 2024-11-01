import MainImageCarouselImage from '@/assets/img/MainImageCarousel.png';
import {
  FirstMainImageCarouselContent,
  SecondMainImageCarouselContent,
  ThirdMainImageCarouselContent,
} from '@/lib/MainImageCarouselContent';

export const MainImageSwiperData = [
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
