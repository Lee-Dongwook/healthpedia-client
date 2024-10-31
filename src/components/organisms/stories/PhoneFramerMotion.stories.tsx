import { Meta, StoryObj } from '@storybook/react';
import PhoneFramerMotion from '@/components/organisms/main/PhoneFramerMotion';

const meta: Meta<typeof PhoneFramerMotion> = {
  title: 'Components/organisms/PhoneFramerMotion',
  component: PhoneFramerMotion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PhoneFramerMotion>;

export const Default: Story = {};
