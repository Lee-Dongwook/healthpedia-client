import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import AuthorAvatarImage from '@/assets/img/author-avatar.png';

const meta: Meta<typeof Avatar> = {
  title: 'Components/atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    imageUrl: AuthorAvatarImage as unknown as string,
  },
};
