import { PopulationDataType } from '../types/populationGraph.type';

/**
 * すでに存在している都道府県の人口データを削除する
 * @param prefName 都道府県名
 * @param editPopulationData フィルターをかけたい人口データ
 * @returns フィルター後の人口データ
 */
export const filterPopulationData = (
  prefName: string,
  editPopulationData: PopulationDataType[],
): PopulationDataType[] => {
  const newPopulationData = editPopulationData.filter((data) => {
    return data.prefName !== prefName;
  });
  return newPopulationData;
};
