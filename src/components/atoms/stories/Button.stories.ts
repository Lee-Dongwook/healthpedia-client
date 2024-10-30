import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/atoms/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    variant: 'secondary',
    children: 'Default',
  },
};

export const Ghost: Story = {
  args: {
    size: 'g-medium',
    variant: 'ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    variant: 'primary',
    children: 'Default',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    variant: 'primary',
    children: 'Default',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    variant: 'primary',
    children: 'Default',
    disabled: true,
  },
};
