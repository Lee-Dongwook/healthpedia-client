import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

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
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Label',
    checked: true,
    disabled: false,
    indeterminate: false,
  },
};
