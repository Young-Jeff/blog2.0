import React from 'react';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { NextThemeProvider, WagmiProvider } from '@/providers';

import { ReactHotToaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Console } from '@/components/console';
import { Fingerprint } from '@/components/fingerprint';

import { routing } from '@/i18n/routing';
import '@/styles/global.css';

export const generateMetadata = async () => {
  const t = await getTranslations('metadata');
  return {
    title: 'YoungJeff',
    description: t('description'),
    keywords: t('keywords'),
  };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html suppressHydrationWarning lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
      </head>
      <body className="debug-screens scroll-smooth overflow-x-clip">
        <NextIntlClientProvider>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
