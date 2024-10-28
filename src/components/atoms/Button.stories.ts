import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/atoms/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
