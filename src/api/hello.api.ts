import { resasApi } from './resas.api';

export const getHello = async () => {
  const res = await resasApi.get('/api/hello');
  return res.data;
};
