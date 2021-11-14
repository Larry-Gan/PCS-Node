import { addDecorator } from '@storybook/react';

import React from 'react';
import { wrapWithProvider } from '../src/redux/store';
import { defaultTheme } from '../src/global';
import { ThemeProvider } from 'styled-components';

// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';

addDecorator((S) =>
  wrapWithProvider(
    <ThemeProvider theme={defaultTheme}>
      <S />
    </ThemeProvider>
  )
);
