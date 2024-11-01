import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
  decorators: [
    Story => {
      return (
        <QueryClientProvider client={new QueryClient()}>
          <Story />
        </QueryClientProvider>
      );
    },
  ],
};

export default preview;
