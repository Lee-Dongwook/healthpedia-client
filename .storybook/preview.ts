import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    tags: ['autodocs'],
    viewports: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewPort: 'tablet',
    },
  },
};

export default preview;
