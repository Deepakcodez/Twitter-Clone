'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Toaster } from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';

const queryClient = new QueryClient();

const ClientProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="201924123219-312uelub9t1sf2t53s0mrhd9m09i13bi.apps.googleusercontent.com">
        {children}
        <Toaster />
        <ReactQueryDevtools />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
