import { Meta, StoryObj } from '@storybook/react';
import BackgroundCardImage from '@/assets/img/BackgroundCard.png';
import BackgroundCard from '@/components/molecules/content/BackgroundCard';

const meta: Meta<typeof BackgroundCard> = {
  title: 'Components/molecules/content/BackgroundCard',
  component: BackgroundCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BackgroundCard>;

export const Default: Story = {
  args: {
    imageUrl: BackgroundCardImage,
    title: '하루 7~8시간, 충분한 수면이 필요해요!',
    description: '수면 시간의 중요성',
  },
};
