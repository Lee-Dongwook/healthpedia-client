import { Meta, StoryObj } from '@storybook/react';
import Radio from '@/components/atoms/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Active: Story = {};

export const Labeled: Story = {
  args: {
    label: 'Type something',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
