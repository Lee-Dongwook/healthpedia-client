import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from '@/components/atoms/AvatarGroup';
import AuthorAvatarImage from '@/assets/img/author-avatar.png';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/atoms/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  args: {
    avatars: [
      {
        imageUrl: AuthorAvatarImage as unknown as string,
        initials: 'AB',
        status: 'active',
        width: 10,
        height: 10,
      },
      {
        imageUrl: AuthorAvatarImage as unknown as string,
        initials: 'CD',
        status: 'idle',
        width: 10,
        height: 10,
      },
      {
        imageUrl: AuthorAvatarImage as unknown as string,
        initials: 'EF',
        status: 'idle',
        width: 10,
        height: 10,
      },
      {
        imageUrl: AuthorAvatarImage as unknown as string,
        initials: 'GH',
        status: 'active',
        width: 10,
        height: 10,
      },
      {
        imageUrl: AuthorAvatarImage as unknown as string,
        initials: 'IJ',
        status: 'active',
        width: 10,
        height: 10,
      },
    ],
    maxCount: 4,
  },
};
