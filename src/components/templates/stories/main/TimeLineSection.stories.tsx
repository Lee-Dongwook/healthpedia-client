import { Meta, StoryObj } from '@storybook/react';
import TimeLineSection from '@/components/templates/main/TimeLineSection';

const meta: Meta<typeof TimeLineSection> = {
  title: 'Components/templates/main/TimeLineSection',
  component: TimeLineSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TimeLineSection>;

export const Default: Story = {};
