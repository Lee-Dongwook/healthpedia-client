import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';

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
        imageUrl: 'https://via.placeholder.com/150',
        initials: 'AB',
        status: 'active',
        width: 10,
        height: 10,
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        initials: 'CD',
        status: 'idle',
        width: 10,
        height: 10,
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        initials: 'EF',
        status: 'idle',
        width: 10,
        height: 10,
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        initials: 'GH',
        status: 'active',
        width: 10,
        height: 10,
      },
      {
        imageUrl: 'https://via.placeholder.com/150',
        initials: 'IJ',
        status: 'active',
        width: 10,
        height: 10,
      },
    ],
    maxCount: 4,
  },
};
