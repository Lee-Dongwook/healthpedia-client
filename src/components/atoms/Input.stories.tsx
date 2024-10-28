import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/atoms/Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    icon: { control: { type: 'select', options: ['password-hide'] } },
    label: { control: 'text' },
    assistiveText: { control: 'text' },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Text: Story = {};

export const RightIcon: Story = {
  args: {
    icon: 'password-hide',
  },
};

export const Labelled: Story = {
  args: {
    label: 'Label',
    icon: 'password-hide',
  },
};

export const AssistiveText: Story = {
  args: {
    label: 'Label',
    assistiveText: 'Empty text',
    icon: 'password-hide',
  },
};
