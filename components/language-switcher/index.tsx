'use client';

import React from 'react';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const LANGUAGES = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ko', label: '한국어' },
];

export type Props = React.ComponentProps<typeof Button>;

export const LanguageSwitcher = (props: Props) => {
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // 使用routing.locales动态生成正则表达式
  const localeRegex = new RegExp(`^/(${routing.locales.join('|')})`);
  const basePathname = pathname.replace(localeRegex, '');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          aria-label="切换语言"
          variant="ghost"
          size="icon"
          {...props}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 32 32"
            className="text-base"
          >
            <path
              fill="currentColor"
              d="M24 14h-2l-6 14h3l.857-2h6.286L27 28h3Zm-2.856 9L23 18.67L24.856 23ZM12 6V4h-2v2H2v2h11.959a13.4 13.4 0 0 1-2.876 7.07A41 41 0 0 1 8.786 12H6.408a42 42 0 0 0 3.404 4.685a64 64 0 0 1-5.49 5.579l1.355 1.472a68 68 0 0 0 5.454-5.523a49 49 0 0 0 3.279 3.342l1.42-1.42a50 50 0 0 1-3.415-3.498A15.34 15.34 0 0 0 15.97 8H20V6Z"
            />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandGroup>
            {LANGUAGES.map(({ code, label }) => (
              <CommandItem
                key={code}
                value={code}
                onSelect={() => {
                  window.location.href = `/${code}${
                    basePathname === '/' ? '' : basePathname
                  }`;
                  setOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      locale === code ? 'opacity-100' : 'opacity-50',
                      'flex items-center',
                    )}
                  >
                    {label}
                  </div>
                  {locale === code && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
