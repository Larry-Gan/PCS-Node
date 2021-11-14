import React from 'react';
import { AppProps } from 'next/app';
import { wrapWithProvider } from 'src/redux/store';
import { defaultTheme } from 'src/global';
import { ThemeProvider } from 'styled-components';
import '../assets/tailwind.css';
import { FirebaseProvider } from '../FirebaseProvider';

/**
 * File: _app.tsx
 * Notes:
 * -Apolloclient Provider wrapper Here
 * -Firebase Provider wrapper here
 * -Theme Provider wrapper here
 */

import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://34.83.163.96:5000/graphql',
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return wrapWithProvider(
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <FirebaseProvider>
          <Component {...pageProps} />
        </FirebaseProvider>
      </ApolloProvider>
    </ThemeProvider>,
    pageProps.initialReduxState
  );
};

export default App;
