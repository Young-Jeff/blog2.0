import { Badge } from '@/components/ui/badge';

import { GoBack } from '@/components/go-back';

import { toFromNow } from '@/lib/utils';

import { type Project } from '../types';

type ProjectDetailProps = {
  project: Project;
};

export const ProjectDetailPage = ({ project }: ProjectDetailProps) => {
  return (
    <div className="md:max-w-screen-md 2xl:max-w-6xl md:px-0 md:mx-auto py-12 md:py-24 px-6 grid gap-9">
      <article>
        <h1 className="mb-4 text-2xl md:text-4xl font-extrabold ">
          {project.title}
        </h1>
        <div className="text-sm flex flex-row items-center text-muted-foreground mb-4">
          <span>发布于 {toFromNow(project.createdAt)}</span>
        </div>
      </article>

      <div className="flex flex-wrap gap-2">
        {project.tags?.map((el) => (
          <Badge key={el.id} className="md:px-5 md:py-2 md:text-base">
            {el.name}
          </Badge>
        ))}
      </div>
      <GoBack />
    </div>
  );
};
