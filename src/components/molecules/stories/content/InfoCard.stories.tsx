import { Meta, StoryObj } from '@storybook/react';
import PlaceholderImage from '@/assets/img/ImagePlaceholder.png';
import InfoCard from '@/components/molecules/content/InfoCard';

const meta: Meta<typeof InfoCard> = {
  title: 'Components/molecules/content/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: '수면',
    description: '수면의 질을 향상시키고 수면 장애를 관리하는 팁을 제공합니다.',
    imageUrl: PlaceholderImage,
    linkHref: '',
  },
};
