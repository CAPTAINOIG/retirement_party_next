import React from 'react';
import Script from 'next/script';
import { Providers } from '@/app/providers';
import './global.css';
import './nprogress.css';

export const metadata = {
  metadataBase: new URL('https://www.statisense.co'),
  title: {
    default: 'Statisense',
    template: '%s • Statisense',
  },
  description:
    'Statisense is a leading AI data company specializing in financial report analysis, bank statement evaluation, and AI chatbot services. Empowering businesses with accurate insights for informed decisions.',
  keywords: [
    'Statisense',
    'AI data company',
    'financial report analysis',
    'bank statement analysis',
    'AI chatbot',
    'business decisions',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://www.statisense.co/',
    siteName: 'Statisense',
    locale: 'en_US',
    images: [
      {
        url: 'https://www.statisense.co/images/logo-icon.png',
        width: 1200,
        height: 630,
        alt: 'Statisense',
      },
    ],
    description:
      'Statisense is a leading AI data company specializing in financial report analysis, bank statement evaluation, and AI chatbot services. Empowering businesses with accurate insights for informed decisions.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://www.statisense.co/images/logo-icon.png'],
  },
};

export const viewport = {
  themeColor: '#ffffff',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background text-foreground dark">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />

        {/* Meta Pixel Code (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=990169537206740&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8R38X7W"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Providers>{children}</Providers>

        {/* Analytics Scripts - Moved here with proper Next.js Script component */}

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M8R38X7W');
            `,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '990169537206740');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* End Meta Pixel Code */}

        {/* Twitter Conversion Tracking */}
        <Script
          id="twitter-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','qa5ef');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "sr50jxt05o");
            `,
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
