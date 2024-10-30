import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from '@/components/atoms/ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/atoms/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Success: Story = {
  args: {
    variant: 'success',
    progress: 70,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    progress: 55,
  },
};
