import { GetPoplationParams, GetPoplationResponseType } from './interfeces/population.interface';
import { resasApi } from './resas.api';

export const getPopulation = async (
  params: GetPoplationParams
): Promise<GetPoplationResponseType> => {
  const res = await resasApi.get<GetPoplationResponseType>('/population/composition/perYear', {
    params: params,
  });
  return res.data;
};
