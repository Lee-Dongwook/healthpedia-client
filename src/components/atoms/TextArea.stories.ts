import { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/atoms/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
export type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
