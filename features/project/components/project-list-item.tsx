import React from 'react';

import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { type Project } from '../types';

type ProjectListItemProps = {
  project: Project;
};

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <div
      key={project.id}
      // href={`${PATHS.SITE_PROJECT}/${project.slug}`}
      className="rounded-2xl border flex flex-col items-center h-full transition-[border] hover:border-primary overflow-hidden"
    >
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-[200px]"
      />
      <div className="w-full p-3">
        <div className="flex justify-between items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-lg font-semibold line-clamp-1 text-[#38bdf8] underline">
                {project.previewUrl ? (
                  <Link target="_blank" href={project.previewUrl}>
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>{project.title}</TooltipContent>
          </Tooltip>
          <a
            target="_blank"
            href={project.codeUrl}
            className="bg-gray-100 hover:bg-gray-200 cursor-pointer w-14 h-6 flex justify-center items-center rounded-md font-bold text-xs dark:text-[#333]"
            rel="noreferrer"
          >
            源码
          </a>
        </div>
        <p className="my-2 line-clamp-3 overflow-ellipsis text-xs">
          {project.description}
        </p>
        <div className="flex flex-row gap-2">
          {project.tags?.map((tag) => <Badge key={tag.id}>{tag.name}</Badge>)}
        </div>
      </div>
    </div>
  );
};
