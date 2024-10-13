import Link from 'next/link';

import { Button } from '@/components/ui/button';

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
          <h2>我是谁</h2>
          <p>
            👨‍💻 一名 95 后前端开发，喜欢学习新技术，不断折腾。
            <br />
            🐛 目前主攻 ts全栈，和区块链相关技术。
            <br />
            📖 喜欢阅读，🏋️ 撸铁，养了一条叫 cookie 的小狗
            🐶，除上班外喜欢一切美好的事物。
          </p>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>我的技能</h2>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>前端</h3>
          <ul>
            <li>
              <IconSkillHTML className="mx-1 translate-y-0.5" /> HTML +
              <IconSkillCSS className="mx-1 translate-y-0.5" />
              CSS + <IconSkillJavaScript className="mx-1 translate-y-0.5" />
              JavaScript ，熟练使用
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
              windicss，熟练使用
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
              Tailwind CSS，熟练使用
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>后端</h3>
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
              MySQL + <IconLogoRedis className="mx-1 translate-y-0.5" /> Redis
              搞全栈开发
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
              Sequelize 搞Node开发
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h3>web3</h3>
          <ul>
            <li>
              <IconLogoEth className="mx-1 translate-y-0.5" />
              Ethers.js + viem + wagmi + rainbowkit 以太坊生态开发
            </li>
            <li>
              <IconLogoSol className="mx-1 translate-y-1" />
              @solana/web3.js + @solana/spl-token + @coral-xyz/anchor +
              @solana/wallet-adapter-wallets solana生态开发
            </li>
            <li>
              <IconLogoTelegram className="mx-1 translate-y-1" />
              grammy + tg Bot API 开发tg bot + tg Mini Apps
            </li>
            <li>
              <IconSkillSolidity className="mx-1 translate-y-0.5" />
              Solidity +
              <IconLogoHardhat className="mx-1 translate-y-0.5" />
              Hardhat + Foundry 浅浅的搞一下智能合约
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
          <h3>其它</h3>
          <ul>
            <li>
              <IconSkillDocker className="mx-1 translate-y-0.5" />
              Docker + Docker Desktop 配置本地服务
            </li>
            <li>
              熟练使用 <IconSkillGit className="mx-1 translate-y-0.5" />
              git +
              <IconLogoSourcetree className="mx-1 translate-y-0.5" />
              SourceTree 进行分支管理
            </li>
            <li>
              熟练使用 <IconLogoGoogle className="mx-1 translate-y-0.5" />
              Google +
              <IconBarandGithub className="mx-1 translate-y-1" />
              GitHub + Cursor + ChatGPT 解决遇到的各种问题 🙋
            </li>
          </ul>
        </div>
        <div
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${getDelay()}ms`,
          }}
        >
          <h2>联系我</h2>
          <ul className="!list-none flex space-x-4 items-center !pl-0 !mb-0">
            {socialMediaList.map((el) => (
              <li key={el.link}>
                <Button asChild variant="outline" size="icon">
                  <Link href={el.link} target="_blank">
                    {el.icon}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
