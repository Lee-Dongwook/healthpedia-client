import { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';
import AuthorAvatarImage from '@/assets/img/author-avatar.png';
import PeopleImage from '@/assets/icon/essentials/People.svg';

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

export const Active: Story = {
  args: {
    imageUrl: AuthorAvatarImage as unknown as string,
    status: 'active',
  },
};

export const Idle: Story = {
  args: {
    imageUrl: AuthorAvatarImage as unknown as string,
    status: 'idle',
  },
};

export const Initials: Story = {
  args: {
    initials: 'ZZ',
    status: 'active',
  },
};

export const Icon: Story = {
  args: {
    icon: <PeopleImage />,
    status: 'active',
  },
};
