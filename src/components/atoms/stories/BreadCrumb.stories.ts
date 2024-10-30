import { Meta, StoryObj } from '@storybook/react';
import BreadCrumb from '@/components/atoms/BreadCrumb';

const meta: Meta<typeof BreadCrumb> = {
  title: 'Components/atoms/BreadCrumb',
  component: BreadCrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BreadCrumb>;

export const BreadCrumbLink: Story = {
  args: {
    path: [{ name: 'item1', url: '/item1' }],
  },
};

export const BreadLongItem: Story = {
  args: {
    path: [
      { name: 'item1', url: '/item1' },
      { name: 'item2', url: '/item2' },
      { name: 'item3', url: '/item3' },
      { name: 'item4', url: '/item4' },
      { name: 'item5', url: '/item5' },
      { name: 'item6', url: '/item6' },
    ],
  },
};
