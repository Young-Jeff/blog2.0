import {
  IconBarandGithub,
  IconLogoJuejin,
  IconSkillGmailLight,
} from '@/components/icons';

import { GITHUB_PAGE, GMAIL_LINK, JUEJIN_PAGE } from '@/constants';

export const socialMediaList: Array<{
  icon: React.ReactNode;
  label: string;
  link: string;
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
];
