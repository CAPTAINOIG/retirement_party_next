'use client';
import { NextUIProvider } from '@nextui-org/react';
import { ToastProvider } from '@/hooks/use-toast';
import { AuthProvider } from '@/hooks/use-auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

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
    </QueryClientProvider>
  );
}
