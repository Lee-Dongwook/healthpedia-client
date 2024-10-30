import { Meta, StoryObj } from '@storybook/react';
import HeaderItem from '@/components/molecules/HeaderItem';

const meta: Meta<typeof HeaderItem> = {
  title: 'Components/molecules/HeaderItem',
  component: HeaderItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HeaderItem>;

export const Default: Story = {};
