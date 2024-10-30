import { Meta, StoryObj } from '@storybook/react';
import Footer from '@/components/organisms/Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
