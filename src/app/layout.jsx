import React from 'react';
import { Providers } from '@/app/providers';
import { Inter } from 'next/font/google';
import './global.scss';
import './nprogress.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Statisense',
  description: 'Statisense - Pioneering AI Data Company for Informed Business Decisions',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Statisense, AI data company, financial report analysis, bank statement analysis, AI chatbot, business decisions"
        />
        <title>Statisense</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.statisense.co/" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
