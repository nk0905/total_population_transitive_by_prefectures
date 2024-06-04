import React, { useContext, useEffect, useState } from 'react';
import { PopulationTransitionTemplatePropsType } from '../types/populationTransition.type';
import PopulationTransitionTemplate from '../components/templates/PopulationTransition/PopulationTransition.template';
import { mockPopulationData } from '../services/mock';
import { PrefecturesDataType } from '../types/prefectures.type';
import { deepCopy } from '../services/utils';
import { PopulationDataType, PopulationKindsType } from '../types/populationGraph.type';
import { filterPopulationData } from '../logics/populationTransition.logic';
import { getPrefectures } from '../api/prefectures.api';
import { LoadingContext } from '../contexts/Loading.context';

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

    mockPopulationData.result.data.map((populationData) => {
      editPopulationData.push({
        ...populationData,
        prefName: editPrefecturesData[index].prefName,
      });
    });
    setPrefecturesData(editPrefecturesData);
    setPopulationData(editPopulationData);
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
