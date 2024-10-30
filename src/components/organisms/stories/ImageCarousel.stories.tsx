import { Meta, StoryObj } from '@storybook/react';
import ImageCarousel from '@/components/organisms/ImageCarousel';

const meta: Meta<typeof ImageCarousel> = {
  title: 'Components/organisms/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {};
