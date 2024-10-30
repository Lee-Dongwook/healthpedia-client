import { Meta, StoryObj } from '@storybook/react';
import GsapAnimation from '@/components/templates/main/GsapAnimation';

const meta: Meta<typeof GsapAnimation> = {
  title: 'Components/templates/main/GsapAnimation',
  component: GsapAnimation,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof GsapAnimation>;

export const Default: Story = {};
