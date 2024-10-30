import { Meta, StoryObj } from '@storybook/react';
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

export const Default: Story = {
  args: {
    mainTitle: 'Main Title',
    subTitle: 'Sub Title',
    content: 'Content',
    src: '',
  },
};
