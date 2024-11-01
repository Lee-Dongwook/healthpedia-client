import { Meta, StoryObj } from '@storybook/react';
import Background from '@/components/templates/main/Background';

const meta: Meta<typeof Background> = {
  title: 'Components/templates/main/Background',
  component: Background,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {};
