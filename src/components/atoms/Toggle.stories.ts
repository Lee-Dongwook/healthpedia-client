import { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {};
