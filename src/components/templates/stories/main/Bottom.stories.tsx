import { Meta, StoryObj } from '@storybook/react';
import Bottom from '@/components/templates/main/Bottom';

const meta: Meta<typeof Bottom> = {
  title: 'Components/templates/main/Bottom',
  component: Bottom,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Bottom>;

export const Default: Story = {};
