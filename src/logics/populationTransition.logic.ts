import { PopulationDataType } from '../components/molecules/PoplationGraph/PoplationGraph.molecule';

/**
 * すでに存在している都道府県の人口データを削除する
 * @param prefName 都道府県名
 * @param editPopulationData フィルターをかけたい人口データ
 * @returns フィルター後の人口データ
 */
export const filterPoplationData = (
  prefName: string,
  editPopulationData: PopulationDataType[]
): PopulationDataType[] => {
  const newPoplationData = editPopulationData.filter((data) => {
    return data.prefName !== prefName;
  });
  return newPoplationData;
};
