import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/atoms/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    indeterminate: false,
  },
};

export const Indeterminate: Story = {
  args: {
    checked: false,
    disabled: false,
    indeterminate: true,
  },
};

export const Labeled: Story = {
  args: {
    checked: true,
    disabled: false,
    indeterminate: false,
    label: 'Type something',
  },
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    indeterminate: false,
  },
};
