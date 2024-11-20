import { useRequest } from 'ahooks';

import { getPV, getTodayPV, recordPV, recordTodayPV } from '../actions';

export const useRecordPV = () => {
  return useRequest(recordPV, { manual: true });
};

export const useGetPV = () => {
  return useRequest(() => getPV());
};

// 新增：记录当日 PV 的钩子
export const useRecordTodayPV = () => {
  return useRequest(recordTodayPV, { manual: true });
};

// 新增：获取当日 PV 的钩子
export const useGetTodayPV = () => {
  return useRequest(() => getTodayPV());
};
