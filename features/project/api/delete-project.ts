import { useRequest } from 'ahooks';

import { showErrorToast, showSuccessToast } from '@/components/ui/toast';

import { deleteProjectByID } from '../actions';

export const useDeleteProject = () => {
  return useRequest(deleteProjectByID, {
    manual: true,
    loadingDelay: 300,
    onSuccess() {
      showSuccessToast('项目已删除');
    },
    onError(error) {
      showErrorToast(`项目删除失败: ${error.message}`);
    },
  });
};
