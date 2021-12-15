import React from 'react';
import '../styles/index.css';
import Header from '../components/Header/Header';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';

 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
