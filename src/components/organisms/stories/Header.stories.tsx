import { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/organisms/Header';

const meta: Meta<typeof Header> = {
  title: 'Components/organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
