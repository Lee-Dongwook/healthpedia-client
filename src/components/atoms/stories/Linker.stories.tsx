import { Meta, StoryObj } from '@storybook/react';
import Linker from '@/components/atoms/Linker';

const meta: Meta<typeof Linker> = {
  title: 'Components/atoms/Linker',
  component: Linker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Linker>;

export const Default: Story = {
  args: {
    href: '/',
    children: 'HomePage',
  },
};
