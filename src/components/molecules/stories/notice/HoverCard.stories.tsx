import { Meta, StoryObj } from '@storybook/react';
import BackgroundCardImage from '@/assets/img/BackgroundCard.png';
import HoverCard from '@/components/molecules/notice/HoverCard';

const meta: Meta<typeof HoverCard> = {
  title: 'Components/molecules/notice/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {
    imageUrl: BackgroundCardImage,
    date: '2024-11-1',
    title: '테스트',
    description: '테스트 내용입니다.',
    likeCount: 20,
    viewCount: 100,
  },
};
