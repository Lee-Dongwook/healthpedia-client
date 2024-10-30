import { Meta, StoryObj } from '@storybook/react';
import Hero from '@/components/templates/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/templates/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
