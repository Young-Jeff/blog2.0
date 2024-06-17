import { useRequest } from 'ahooks';

import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

import { toggleProjectPublished, updateProject } from '../actions';

export const useUpdateProject = () => {
  return useRequest(updateProject, {
    manual: true,
    loadingDelay: 300,
    onSuccess() {
      showSuccessToast('项目已更新');
    },
    onError(error) {
      showErrorToast(`项目更新: ${error.message}`);
    },
  });
};

export const useToggleProjectPublish = () => {
  return useRequest(toggleProjectPublished, {
    manual: true,
    loadingDelay: 300,
    onSuccess() {
      showSuccessToast('项目发布状态已更新');
    },
    onError(error) {
      showErrorToast(`项目发布状态更新失败: ${error.message}`);
    },
  });
};
