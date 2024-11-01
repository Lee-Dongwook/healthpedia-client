import { Meta, StoryObj } from '@storybook/react';
import TimeLineEvent from '@/components/molecules/main/TimeLineEvent';

const meta: Meta<typeof TimeLineEvent> = {
  title: 'Components/molecules/main/TimeLineEvent',
  component: TimeLineEvent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TimeLineEvent>;

export const Default: Story = {
  args: {
    date: '10.11',
    description: '예시 연혁',
  },
};
