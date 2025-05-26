'use client';

import { useTranslations } from 'next-intl';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

import { IconSolarLogout2 } from '@/components/icons';

import { cn } from '@/lib/utils';

import { signoutAndRedirect } from '../actions/signout';

export const SignOutButton = () => {
  const t = useTranslations('admin');
  async function handleLogout() {
    await signoutAndRedirect();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={cn(
            'lg:!w-full  text-primary-foreground bg-muted-foreground/10 hover:bg-muted-foreground/20',
          )}
        >
          <IconSolarLogout2 className="lg:mr-2 lg:text-2xl" />
          <span className="hidden lg:inline-block">{t('logout')}</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTrigger>
          <AlertDialogTitle>{t('tips')}</AlertDialogTitle>
          <AlertDialogDescription>{t('confirmLogout')}</AlertDialogDescription>
        </AlertDialogTrigger>
        <AlertDialogFooter>
          <AlertDialogCancel>{t('cancel')}</AlertDialogCancel>
          <AlertDialogAction onClick={handleLogout}>
            {t('confirm')}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
