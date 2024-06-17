import { IllustrationNoContent } from '@/components/illustrations';

import { ProjectListItem } from './project-list-item';

import { type Project } from '../types';

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  if (!projects.length) {
    return (
      <div className="grid gap-8 place-content-center">
        <IllustrationNoContent className="w-[30vh] h-[30vh]" />
        <h3 className="text-2xl font-semibold tracking-tight text-center">
          暂无项目
        </h3>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-3 2xl:grid-cols-4 gap-4">
      {projects.map((el, idx) => (
        <li
          key={el.id}
          className="animate-fade-up animate-ease-in-out"
          style={{
            animationDelay: `${(idx + 1) * 200}ms`,
          }}
        >
          <ProjectListItem project={el} />
        </li>
      ))}
    </ul>
  );
};
