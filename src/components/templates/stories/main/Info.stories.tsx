import { Meta, StoryObj } from '@storybook/react';
import Info from '@/components/templates/main/Info';

const meta: Meta<typeof Info> = {
  title: 'Components/templates/main/Info',
  component: Info,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Default: Story = {};
