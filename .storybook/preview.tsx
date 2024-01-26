import { ThemeProvider } from '@mui/material';
import React from 'react';
import { sMoneyTrackerTheme } from '../src/theme';

const withThemeProvider = (Story) => (
  <ThemeProvider theme={sMoneyTrackerTheme}>
    <Story />
  </ThemeProvider>
);

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
