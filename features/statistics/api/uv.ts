import { useRequest } from 'ahooks';

import {
  getBlogUV,
  getTodayUV,
  getUV,
  recordBlogUV,
  recordTodayUV,
  recordUV,
} from '../actions';

export const useRecordUV = () => {
  return useRequest((cid: string) => recordUV(cid), { manual: true });
};

export const useGetUV = () => {
  return useRequest(() => getUV());
};

export const useRecordBlogUV = () => {
  return useRequest(
    (blogID?: string, cid?: string) => recordBlogUV(blogID, cid),
    { manual: true },
  );
};

export const useGetBlogUV = () => {
  return useRequest((blogID: string) => getBlogUV(blogID));
};

// 新增：记录当日 UV 的钩子
export const useRecordTodayUV = () => {
  return useRequest((cid: string) => recordTodayUV(cid), { manual: true });
};

// 新增：获取当日 UV 的钩子
export const useGetTodayUV = () => {
  return useRequest(() => getTodayUV());
};
