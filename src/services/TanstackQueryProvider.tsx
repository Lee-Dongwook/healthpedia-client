'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface TanstackQueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function TanstackQueryProvider({
  children,
}: TanstackQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}