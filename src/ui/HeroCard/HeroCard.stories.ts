import type { Meta, StoryObj } from "@storybook/react";
import HeroCard from ".";

const meta: Meta<typeof HeroCard> = {
  title: "ui/HeroCard",
  component: HeroCard,
  args: {
    title: "Welcome to Our Studio",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof HeroCard>;

const Default: Story = {};
