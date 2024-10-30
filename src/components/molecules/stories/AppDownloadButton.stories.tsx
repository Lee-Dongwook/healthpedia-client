import { Meta, StoryObj } from '@storybook/react';
import AppDownloadButton from '@/components/molecules/AppDownloadButton';

const meta: Meta<typeof AppDownloadButton> = {
  title: 'Components/molecules/AppDownloadButton',
  component: AppDownloadButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AppDownloadButton>;

export const Default: Story = {};
