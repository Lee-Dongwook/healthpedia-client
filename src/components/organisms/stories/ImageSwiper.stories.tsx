import { Meta, StoryObj } from '@storybook/react';
import MainImageCarouselImage from '@/assets/img/MainImageCarousel.png';
import ImageSwiper from '@/components/organisms/ImageSwiper';

const meta: Meta<typeof ImageSwiper> = {
  title: 'Components/organisms/ImageSwiper',
  component: ImageSwiper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ImageSwiper>;

export const Default: Story = {
  args: {
    data: [
      {
        id: 1,
        title: '고객 지향적 사고',
        subtitle: 'Customer-centric Thinking',
        descriptionTitle: '고객의 입장에서 생각하고 공감하고 의사 결정하기',
        description: {
          firstLine: [
            { text: '헬스피디아는 ', color: 'text-gray-500' },
            { text: '고객에게 가치가 있는가', color: 'text-blue-500' },
            {
              text: '를 기준으로 의사결정 하겠습니다.',
              color: 'text-gray-500',
            },
          ],
          secondLine: [
            {
              text: '고객의 관점에서 바라보며 이해 및 공감하고, 오로지 고객관점에서',
              color: 'text-gray-500',
            },
          ],
          thirdLine: [
            {
              text: '최선의 해결안을 제공하기 위해 노력하도록 하겠습니다.',
              color: 'text-gray-500',
            },
          ],
        },
        image: MainImageCarouselImage,
      },
      {
        id: 2,
        title: '도전과 혁신',
        subtitle: 'Challenge & Innovation',
        descriptionTitle: '기존 고정관념 탈피와 도전',
        description: {
          firstLine: [
            { text: '헬스피디아는 ', color: 'text-gray-500' },
            {
              text: '고객의 성공을 위해 필요하다고 판단되면',
              color: 'text-blue-500',
            },
          ],
          secondLine: [
            {
              text: '기존의 관행, 성공방식, 룰에 과감히 도전하겠습니다.',
              color: 'text-blue-500',
            },
          ],
          thirdLine: [
            {
              text: '도전을 통해 혁신하고, 혁신하는 과정을 통해 조직과 구성원들이 성장하도록 하겠습니다.',
              color: 'text-gray-500',
            },
          ],
        },
        image: MainImageCarouselImage,
      },
      {
        id: 3,
        title: '상생',
        subtitle: 'Co-prosperity',
        descriptionTitle: '생태계의 구성원들과 함께 성장하기',
        description: {
          firstLine: [
            { text: '헬스피디아는 ', color: 'text-gray-500' },
            {
              text: '각 사업의 구성원들과 Win-Win하는',
              color: 'text-blue-500',
            },
          ],
          secondLine: [
            {
              text: '장기적 관계를 구축하도록 하겠습니다.',
              color: 'text-blue-500',
            },
          ],
          thirdLine: [
            {
              text: '이를 통해 궁극적으로 고객에게 혜택이 돌아가는 생태계를 구축하도록 하겠습니다.',
              color: 'text-gray-500',
            },
          ],
        },
        image: MainImageCarouselImage,
      },
    ],
  },
};
