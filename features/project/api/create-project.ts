import { useRequest } from 'ahooks';

import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

import { createProject } from '../actions';

export const useCreateProject = () => {
  return useRequest(createProject, {
    manual: true,
    loadingDelay: 300,
    onSuccess() {
      showSuccessToast('项目已创建');
    },
    onError(error) {
      showErrorToast(`项目创建失败: ${error.message}`);
    },
  });
};
