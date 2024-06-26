import React, { useContext, useEffect, useState } from 'react';
import { PopulationTransitionTemplatePropsType } from '../types/populationTransition.type';
import PopulationTransitionTemplate from '../components/templates/PopulationTransition/PopulationTransition.template';
import { PrefecturesDataType } from '../types/prefectures.type';
import { deepCopy } from '../services/utils';
import { PopulationDataType, PopulationKindsType } from '../types/populationGraph.type';
import { filterPopulationData } from '../logics/populationTransition.logic';
import { getPrefectures } from '../api/prefectures.api';
import { LoadingContext } from '../contexts/Loading.context';
import { GetPopulationParams } from '../api/types/population.type';
import { All_CITY_PARAM } from '../services/constants';
import { getPopulation } from '../api/population.api';

const PopulationTransition: React.FC = () => {
  const { isLoading, setLoading } = useContext(LoadingContext);
  // 都道府県一覧画面のstate
  const [prefecturesData, setPrefecturesData] = useState<PrefecturesDataType[]>([]);
  // 人口グラフの種類のstate
  const [checkedPopulationKinds, setCheckedPopulationKinds] =
    useState<PopulationKindsType>('総人口');
  // 人口データのstate
  const [populationData, setPopulationData] = useState<PopulationDataType[]>([]);

  useEffect(() => {
    setLoading(true);
    getPrefectures()
      .then((res) => {
        // axiosのinterceptorsの影響で、エラーがあったときres.resultはundefinedになる。
        if (res.result) {
          const newPrefecturesData: PrefecturesDataType[] = res.result.map((prefecture) => {
            return { ...prefecture, isChecked: false };
          });
          setPrefecturesData((prevList) => {
            if (JSON.stringify(prevList) === JSON.stringify(newPrefecturesData)) {
              return prevList;
            } else {
              return newPrefecturesData;
            }
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // 都道府県一覧画面の関数
  const handleChangePrefecturesCheckbox = (index: number) => {
    const editPrefecturesData = deepCopy(prefecturesData);
    const editPopulationData = deepCopy(populationData);

    editPrefecturesData[index].isChecked = !editPrefecturesData[index].isChecked;

    // チェック済みの場合、選択された都道府県のデータのみを削除する
    if (prefecturesData[index].isChecked) {
      const newPopulationData = filterPopulationData(
        editPrefecturesData[index].prefName,
        editPopulationData,
      );
      setPopulationData(newPopulationData);
      setPrefecturesData(editPrefecturesData);
      return;
    }

    // 新たに都道府県がチェックされた場合、その都道府県の人口データを取得する
    const params: GetPopulationParams = {
      cityCode: All_CITY_PARAM,
      prefCode: editPrefecturesData[index].prefCode,
    };
    setLoading(true);
    getPopulation(params)
      .then((res) => {
        // axiosのinterceptorsの影響で、エラーがあったときres.resultはundefinedになる。
        if (res.result) {
          res.result.data.map((populationData) => {
            editPopulationData.push({
              ...populationData,
              prefName: editPrefecturesData[index].prefName,
            });
          });
          setPrefecturesData(editPrefecturesData);
          setPopulationData(editPopulationData);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 都道府県別人口グラフ画面の関数
  const handleChangePopulationKindsTab = (tab: PopulationKindsType) => {
    setCheckedPopulationKinds(tab);
  };

  const props: PopulationTransitionTemplatePropsType = {
    isLoading: isLoading,
    headerProps: {
      title: '都道府県別の人口推移グラフ',
    },
    prefecturesProps: {
      prefecturesData: prefecturesData,
      events: {
        onChangePrefecturesCheckbox: handleChangePrefecturesCheckbox,
      },
    },
    populationGraphProps: {
      checkedPopulationKinds: checkedPopulationKinds,
      populationData: populationData,
      events: {
        onChangePopulationKindsTab: handleChangePopulationKindsTab,
      },
    },
  };
  return <PopulationTransitionTemplate {...props} />;
};

PopulationTransition.whyDidYouRender = true;
export default PopulationTransition;
