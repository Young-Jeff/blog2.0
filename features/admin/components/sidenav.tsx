import React from 'react';

import { type Session } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import { IconSolarArrowRightUpLinear } from '@/components/icons';

import { PATHS, PLACEHODER_TEXT } from '@/constants';
import { SignOutButton } from '@/features/auth';
import { auth } from '@/lib/auth';
import { isAdmin } from '@/lib/utils';

import { Sidebar } from './sidebar';

const Desc = async ({ session }: { session: Session | null }) => {
  const t = await getTranslations('admin');
  return isAdmin(session?.user?.email, session?.user?.id) ? (
    <div className="flex justify-center flex-col items-center space-y-1">
      <Badge className="bg-background text-foreground">{t('admin')}</Badge>
      <div className="text-xs text-muted-foreground font-medium wrap-break-word">
        {t('hasAllPermissions')}
      </div>
    </div>
  ) : (
    <div className="flex justify-center flex-col items-center space-y-1">
      <Badge className="bg-background text-foreground">{t('guest')}</Badge>
      <div className="text-xs text-muted-foreground font-medium">
        {t('canOnlyViewPartialData')}
      </div>
    </div>
  );
};

export const Sidenav = async () => {
  const session = await auth();
  const t = await getTranslations('admin');
  return (
    <aside className="w-16 lg:w-[256px] transition-all h-screen flex-col flex items-center justify-between py-12 bg-foreground">
      <div className="flex-col flex items-center w-full">
        <Avatar className="w-14 h-14 border border-muted-foreground/10">
          <AvatarImage
            src={session?.user?.image ?? ''}
            alt={session?.user?.name ?? PLACEHODER_TEXT}
          />
          <AvatarFallback>{PLACEHODER_TEXT}</AvatarFallback>
        </Avatar>
        <h4 className="hidden lg:block text-lg font-semibold tracking-tight mt-2 text-primary-foreground w-[80%] text-ellipsis line-clamp-1 text-center">
          {session?.user?.name ?? PLACEHODER_TEXT}
        </h4>
        <Desc session={session} />

        <div className="w-full flex-col items-center lg:items-start flex mt-8 space-y-4">
          <Sidebar />
        </div>
      </div>
      <div className="mt-5 flex flex-col justify-center lg:grid w-full space-y-1">
        <SignOutButton />
        <Button
          asChild
          className="lg:!w-full text-primary-foreground bg-muted-foreground/10 hover:bg-muted-foreground/20"
        >
          <Link href={PATHS.SITE_HOME} target="_blank">
            <span className="hidden lg:inline-block">{t('goToHomepage')}</span>
            <IconSolarArrowRightUpLinear />
          </Link>
        </Button>
      </div>
    </aside>
  );
};
