import { GetPrefecturesResponseType } from './types/prefectures.types';
import { resasApi } from './resas.api';

/**
 * 都道府県のデータを取得するAPI
 * @returns 都道府県
 */
export const getPrefectures = async (): Promise<GetPrefecturesResponseType> => {
  const res = await resasApi.get<GetPrefecturesResponseType>('/api/prefectures');
  return res.data;
};
