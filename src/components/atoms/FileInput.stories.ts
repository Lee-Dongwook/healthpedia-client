import { Meta, StoryObj } from '@storybook/react';
import FileInput from './FileInput';

const meta: Meta<typeof FileInput> = {
  title: 'Components/atoms/FileInput',
  component: FileInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof FileInput>;

export const Default: Story = {};
