import { Meta, StoryObj } from '@storybook/react';
import TimeLineYear from '@/components/organisms/TimeLineYear';

const meta: Meta<typeof TimeLineYear> = {
  title: 'Components/organisms/TimeLineYear',
  component: TimeLineYear,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TimeLineYear>;

export const Default: Story = {
  args: {
    year: '2024',
    events: [
      { date: '10.11', description: 'Example event' },
      { date: '20.12', description: 'Another example event' },
    ],
  },
};
