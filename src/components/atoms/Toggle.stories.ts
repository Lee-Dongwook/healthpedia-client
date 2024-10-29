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

export const ActiveOff: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const ActiveOn: Story = {
  args: {
    checked: true,
    disabled: false,
  },
};

export const DisabledOff: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
