'use client';
import Script from 'next/script';
import { NextUIProvider } from '@nextui-org/react';
import { ToastProvider } from '@/hooks/use-toast';
import { AuthProvider } from '@/hooks/use-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

const INFOGRAPHICS_URL = process.env.NEXT_PUBLIC_INFOGRAPHICS_URL;

const qc = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
    },
  },
});

export function Providers({ children }) {
  return (
    <QueryClientProvider client={qc}>
      <AuthProvider>
        <NextUIProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <ToastProvider>{children}</ToastProvider>
          </ThemeProvider>
        </NextUIProvider>
      </AuthProvider>
      <Script src={`${INFOGRAPHICS_URL}/widget.js`} strategy="afterInteractive" />
    </QueryClientProvider>
  );
}
