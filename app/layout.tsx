import React from 'react';

import { type Metadata } from 'next';

import { NextThemeProvider, WagmiProvider } from '@/providers';

import { ReactHotToaster } from '@/components/ui/toast';
import { TooltipProvider } from '@/components/ui/tooltip';

import { Console } from '@/components/console';
import { Fingerprint } from '@/components/fingerprint';

import { WEBSITE } from '@/constants';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: WEBSITE,
  description:
    '专业的 TypeScript 全栈开发者，提供软件外包服务，包括响应式网站开发、Web3 DApp、Telegram Bot 和 Mini Apps 开发。承接各类软件开发项目，基于 React/Vue + Tailwind CSS 构建现代化响应式网站，使用 Next.js、Express、Nest.js 等技术栈，确保高质量交付。',
  keywords: [
    'TypeScript全栈开发',
    '软件外包',
    '程序开发外包',
    '接单开发',
    '外包接单',
    '软件开发服务',
    '项目外包',
    '网站开发外包',
    '响应式网站开发',
    'React开发',
    'Vue开发',
    'Tailwind CSS',
    'Web3开发',
    'TON开发',
    'Telegram Bot开发',
    'Telegram Mini Apps',
    'TWA开发',
    'Next.js开发',
    '前端开发',
    '全栈开发',
  ].join(', '),
  openGraph: {
    title: 'Full Stack Developer - 软件外包|TypeScript全栈|响应式网站开发专家',
    description:
      '专业的软件外包服务提供者，擅长 TypeScript 全栈开发，提供响应式网站开发、Web3 DApp、Telegram Bot 和 Mini Apps 开发服务。使用 React/Vue + Tailwind CSS 构建现代化网站，确保高质量交付。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Developer - 软件外包|TypeScript全栈|响应式网站开发专家',
    description:
      '专业的软件外包服务提供者，承接各类开发项目，提供响应式网站开发、Web3 DApp、Telegram Bot 和 Mini Apps 开发服务。',
  },
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
