import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

import {
  IconBarandGithub,
  IconLogoEthereum,
  IconLogoGoogle,
  IconLogoHardhat,
  IconLogoSourcetree,
  IconSkillCSS,
  IconSkillDocker,
  IconSkillGit,
  IconSkillHTML,
  IconSkillJavaScript,
  IconSkillMysqlDark,
  IconSkillMysqlLight,
  IconSkillNestDark,
  IconSkillNestLight,
  IconSkillNextjsDark,
  IconSkillNextjsLight,
  IconSkillNuxtDark,
  IconSkillNuxtLight,
  IconSkillPrisma,
  IconSkillReactDark,
  IconSkillReactLight,
  IconSkillSolidity,
  IconSkillTailwindcssDark,
  IconSkillTailwindcssLight,
  IconSkillTypeScript,
  IconSkillVueDark,
  IconSkillVueLight,
  IconSkillWindicssDark,
  IconSkillWindicssLight,
} from '@/components/icons';
import { IconLogoEth } from '@/components/icons/logos/icon-logo-eth';
import { IconLogoRedis } from '@/components/icons/logos/icon-logo-redis';
import { IconLogoSequelize } from '@/components/icons/logos/icon-logo-sequelize';
import { IconLogoSol } from '@/components/icons/logos/icon-logo-sol';
import { IconLogoTelegram } from '@/components/icons/logos/icon-logo-telegram';
import { IconLogoTypeorm } from '@/components/icons/logos/icon-logo-typeorm';
import { PageHeader } from '@/components/page-header';

import { PATHS } from '@/constants';
import { socialMediaList } from '@/features/home';

export const revalidate = 60;

export default function Page() {
  const t = useTranslations('about');
  let delay = 0;

  // 每次调用，增加延时
  const getDelay = () => (delay += 200);

  return (
    <div className="w-full flex flex-col justify-center px-6 md:max-w-screen-md  2xl:max-w-6xl  md:mx-auto pb-24 pt-8">
      <PageHeader
        breadcrumbList={[PATHS.SITE_HOME, PATHS.SITE_ABOUT]}
        className="mb-0"
      />

      <section className="prose dark:prose-invert prose-zinc  2xl:max-w-6xl">
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>{t('whoAmI')}</h2>
          <p>{t('whoAmIDesc')}</p>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>{t('mySkills')}</h2>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>{t('frontend')}</h3>
          <ul>
            <li>
              <IconSkillHTML className="mx-1 translate-y-0.5" /> HTML +
              <IconSkillCSS className="mx-1 translate-y-0.5" />
              CSS + <IconSkillJavaScript className="mx-1 translate-y-0.5" />
              JavaScript {t('proficientUsage')}
            </li>
            <li>
              <>
                <IconSkillVueDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillVueLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              Vue +
              <>
                <IconSkillNuxtDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillNuxtLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              Nuxt +
              <>
                <IconSkillWindicssDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillWindicssLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              windicss {t('proficientUsage')}
            </li>
            <li>
              <IconSkillTypeScript className="mx-1 translate-y-0.5" />
              TypeScript +
              <>
                <IconSkillReactDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillReactLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              React +
              <>
                <IconSkillNextjsDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillNextjsLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              Next.js +
              <>
                <IconSkillTailwindcssDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillTailwindcssLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              Tailwind CSS {t('proficientUsage')}
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>{t('backend')}</h3>
          <ul>
            <li>
              <>
                <IconSkillNextjsDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillNextjsLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              Next.js + <IconSkillPrisma className="mx-1 translate-y-0.5" />
              Prisma + <IconLogoTypeorm className="mx-1 translate-y-0.5" />{' '}
              TypeORM +
              <>
                <IconSkillMysqlDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillMysqlLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              MySQL + <IconLogoRedis className="mx-1 translate-y-0.5" /> Redis{' '}
              {t('fullStackDevelopment')}
            </li>
            <li>
              <>
                <IconSkillNestDark className="dark:hidden mx-1 translate-y-0.5" />
                <IconSkillNestLight className="hidden dark:inline-block mx-1 translate-y-0.5" />
              </>
              Nest.js/Express +{' '}
              <IconSkillPrisma className="mx-1 translate-y-0.5" />
              Prisma + <IconLogoTypeorm className="mx-1 translate-y-0.5" />{' '}
              TypeORM + <IconLogoSequelize className="mx-1 translate-y-0.5" />{' '}
              Sequelize {t('nodeDevelopment')}
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>{t('web3')}</h3>
          <ul>
            <li>
              <IconLogoEth className="mx-1 translate-y-0.5" />
              Ethers.js + viem + wagmi + rainbowkit {t('ethereumEcosystem')}
            </li>
            <li>
              <IconLogoSol className="mx-1 translate-y-1" />
              @solana/web3.js + @solana/spl-token + @coral-xyz/anchor +
              @solana/wallet-adapter-wallets {t('solanaEcosystem')}
            </li>
            <li>
              <IconLogoTelegram className="mx-1 translate-y-1" />
              grammy + tg Bot API {t('development')} tg bot + tg Mini Apps
            </li>
            <li>
              <IconSkillSolidity className="mx-1 translate-y-0.5" />
              Solidity +
              <IconLogoHardhat className="mx-1 translate-y-0.5" />
              Hardhat + Foundry {t('basicSmartContract')}
              <IconLogoEthereum className="mx-1 translate-y-0.5" />
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>{t('others')}</h3>
          <ul>
            <li>
              <IconSkillDocker className="mx-1 translate-y-0.5" />
              Docker + Docker Desktop {t('localServiceConfig')}
            </li>
            <li>
              {t('proficientUsage')}{' '}
              <IconSkillGit className="mx-1 translate-y-0.5" />
              git +
              <IconLogoSourcetree className="mx-1 translate-y-0.5" />
              SourceTree {t('branchManagement')}
            </li>
            <li>
              {t('proficientUsage')}{' '}
              <IconLogoGoogle className="mx-1 translate-y-0.5" />
              Google +
              <IconBarandGithub className="mx-1 translate-y-1" />
              GitHub + Cursor + ChatGPT {t('problemSolving')} 🙋
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>{t('contactMe')}</h2>
          <ul className="!list-none flex space-x-4 items-center !pl-0 !mb-0">
            {socialMediaList.map((el) => (
              <li key={el.link}>
                {el.isQRCode ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="icon">
                        {el.icon}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <div className="flex justify-center">
                        <Image
                          src={el.link}
                          alt={el.label}
                          width={200}
                          height={200}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button asChild variant="outline" size="icon">
                    <Link href={el.link} target="_blank">
                      {el.icon}
                    </Link>
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
