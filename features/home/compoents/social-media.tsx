import {
  IconBarandGithub,
  IconLogoJuejin,
  IconLogoWechat,
  IconSkillGmailLight,
} from '@/components/icons';
import { IconLogoTelegram } from '@/components/icons/logos/icon-logo-telegram';

import {
  GITHUB_PAGE,
  GMAIL_LINK,
  JUEJIN_PAGE,
  TELEGRAM_LINK,
  WECHAT_QR_CODE,
} from '@/constants';

export const socialMediaList: Array<{
  icon: React.ReactNode;
  label: string;
  link: string;
  isQRCode?: boolean;
}> = [
  {
    icon: <IconBarandGithub className="text-2xl" />,
    label: 'Github',
    link: GITHUB_PAGE,
  },
  {
    icon: <IconSkillGmailLight className="text-2xl dark:inline-block" />,
    label: 'Gmail',
    link: GMAIL_LINK,
  },
  {
    icon: <IconLogoJuejin className={`text-2xl text-[#2985fc]`} />,
    label: '掘金',
    link: JUEJIN_PAGE,
  },
  {
    icon: <IconLogoWechat className={`text-2xl text-[#09B83E]`} />,
    label: '微信',
    link: WECHAT_QR_CODE,
    isQRCode: true,
  },
  {
    icon: <IconLogoTelegram className="text-2xl" />, // Telegram brand color
    label: 'Telegram',
    link: TELEGRAM_LINK,
  },
];
