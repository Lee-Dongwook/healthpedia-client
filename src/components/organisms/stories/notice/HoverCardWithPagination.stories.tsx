import { Meta, StoryObj } from '@storybook/react';
import HoverCardWithPagination from '@/components/organisms/notice/HoverCardWithPagination';

const meta: Meta<typeof HoverCardWithPagination> = {
  title: 'Components/organisms/notice/HoverCardWithPagination',
  component: HoverCardWithPagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof HoverCardWithPagination>;

export const Default: Story = {};
