import type { Content, ContentLine } from '@/types/MainImageCarouselContent';

export const FirstMainImageCarouselContent: ContentLine = {
  firstLine: [
    { text: '헬스피디아는', color: 'text-gray-500' },
    { text: '고객에게 가치가 있는가', color: 'text-blue-500' },
    { text: '를 기준으로 의사결정 하겠습니다.', color: 'text-gray-500' },
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
};

export const SecondMainImageCarouselContent: ContentLine = {
  firstLine: [
    { text: '헬스피디아는', color: 'text-gray-500' },
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
};

export const ThirdMainImageCarouselContent: ContentLine = {
  firstLine: [
    { text: '헬스피디아는', color: 'text-gray-500' },
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
};

export const MainImageCarouselContentList: Content = {
  firstContent: FirstMainImageCarouselContent,
  secondContent: SecondMainImageCarouselContent,
  thirdContent: ThirdMainImageCarouselContent,
};
