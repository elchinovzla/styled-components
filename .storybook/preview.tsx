import { ThemeProvider } from '@mui/material';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { sMoneyTrackerTheme } from '../src/theme';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme?.palette.background.default || '#272727'};
  }
`;

const withThemeProvider = (Story) => (
  <ThemeProvider theme={sMoneyTrackerTheme}>
    <GlobalStyles />
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
