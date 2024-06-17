import { useRequest } from 'ahooks';

import { getProjectByID } from '../actions';

export const useGetProject = (id: string, ready: boolean) => {
  return useRequest(() => getProjectByID(id), {
    ready,
    loadingDelay: 300,
  });
};
