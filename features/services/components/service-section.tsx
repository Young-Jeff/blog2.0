import React from 'react';

import { useTranslations } from 'next-intl';

import { Icon } from '@iconify/react';

const services = [
  {
    icon: 'fluent:code-circle-20-filled',
    title: 'fullStackDevelopment',
    description: 'fullStackDescription',
    tags: ['TypeScript', 'Next.js', 'Express', 'Nest.js', 'AWS/阿里云'],
  },
  {
    icon: 'fluent:bot-20-filled',
    title: 'telegramDevelopment',
    description: 'telegramDescription',
    tags: ['Telegram Bot API', 'Mini-Apps', 'Ton', '用户交互'],
  },
  {
    icon: 'fluent:design-ideas-20-filled',
    title: 'responsiveWebDevelopment',
    description: 'responsiveWebDescription',
    tags: ['React', 'Vue', 'Tailwind CSS', 'Responsive Design', 'Animation'],
  },
];

const ServiceSection: React.FC = () => {
  const t = useTranslations('services');
  return (
    <div className="px-3 sm:px-4 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 sm:mb-2 
                        bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          >
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-3 sm:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50/50 dark:bg-gray-800/20 
                         backdrop-blur-sm rounded-lg 
                         p-3 sm:p-4 md:p-6
                         border border-gray-100 dark:border-gray-700/50 
                         hover:border-blue-500/30 dark:hover:border-blue-500/30
                         shadow-sm hover:shadow-md
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-row items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <Icon
                    icon={service.icon}
                    className="text-2xl sm:text-3xl md:text-4xl 
                             text-blue-600 dark:text-blue-500 transition-transform 
                             duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className="text-base sm:text-lg font-semibold 
                               mb-1.5 sm:mb-2
                               text-gray-800 dark:text-gray-100
                               truncate"
                  >
                    {t(service.title)}
                  </h3>
                  <p
                    className="text-xs sm:text-sm 
                               leading-relaxed
                               text-gray-600 dark:text-gray-400 
                               mb-2 sm:mb-3"
                  >
                    {t(service.description)}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-1.5 sm:px-2 py-0.5 
                                 text-[10px] sm:text-xs 
                                 rounded-full
                                 bg-blue-50 dark:bg-blue-500/10 
                                 text-blue-600 dark:text-blue-500
                                 border border-blue-100 dark:border-blue-500/20
                                 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
