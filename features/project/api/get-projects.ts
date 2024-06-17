import { useRequest } from 'ahooks';

import { getProjects } from '../actions';
import { type GetProjectsDTO } from '../types';

export const useGetProjects = (params: GetProjectsDTO) => {
  return useRequest(() => getProjects(params), {
    refreshDeps: [params],
    loadingDelay: 300,
  });
};
