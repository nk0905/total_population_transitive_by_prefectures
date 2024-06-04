import { GetPopulationParams, GetPopulationResponseType } from './types/population.type';
import { resasApi } from './resas.api';

export const getPopulation = async (
  params: GetPopulationParams,
): Promise<GetPopulationResponseType> => {
  const res = await resasApi.get<GetPopulationResponseType>('/api/population', {
    params,
  });
  return res.data;
};
