import { Meta, StoryObj } from '@storybook/react';
import Radio from './Radio';

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

export const Default: Story = {};
