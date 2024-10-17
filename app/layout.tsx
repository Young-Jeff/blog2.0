import React from 'react';

import { type Metadata } from 'next';

import { NextThemeProvider, WagmiProvider } from '@/providers';

import { ReactHotToaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Console } from '@/components/console';
import { Fingerprint } from '@/components/fingerprint';

import { NICKNAME, SLOGAN, WEBSITE } from '@/constants';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: `%s - ${WEBSITE}`,
    default: `${WEBSITE}`,
  },
  description: `${SLOGAN}`,
  keywords: NICKNAME,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
      </head>
      <body className="debug-screens scroll-smooth overflow-x-clip">
        <TooltipProvider>
          <NextThemeProvider attribute="class">
            <WagmiProvider>
              {children}

              <ReactHotToaster />

              <Console />

              <Fingerprint />
            </WagmiProvider>
          </NextThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
