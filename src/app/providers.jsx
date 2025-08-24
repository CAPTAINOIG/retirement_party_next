'use client';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
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
        <HeroUIProvider>
          <ToastProvider />
          <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </ThemeProvider>
        </HeroUIProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
