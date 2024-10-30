import { Meta, StoryObj } from '@storybook/react';
// import MainImageCarouselImage from '@/assets/img/MainImageCarousel.png';
import ImageCarouselItem from '@/components/molecules/ImageCarouselItem';

const meta: Meta<typeof ImageCarouselItem> = {
  title: 'Components/molecules/ImageCarouselItem',
  component: ImageCarouselItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ImageCarouselItem>;

export const First: Story = {
  args: {
    mainTitle: '고객 지향적 사고',
    subTitle: 'Customer-centric Thinking',
    contentTitle: '고객 입장에서 생각하고 공감하고 의사 결정하기',
    contentNumber: 1,
    src: '/img/MainImageCarousel.png',
  },
};

export const Second: Story = {
  args: {
    mainTitle: '도전과 혁신',
    subTitle: 'Challenge & Innovation',
    contentTitle: '기존 고정관념 탈피와 도전',
    contentNumber: 2,
    src: '/img/MainImageCarousel.png',
  },
};

export const Third: Story = {
  args: {
    mainTitle: '상생',
    subTitle: 'Co-prosperity',
    contentTitle: '생태계의 구성원들과 함께 성장하기',
    contentNumber: 3,
    src: '/img/MainImageCarousel.png',
  },
};
