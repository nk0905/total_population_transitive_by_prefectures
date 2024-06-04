import React, { useEffect, useState } from 'react';
import { PopulationTransitionTemplatePropsType } from '../types/populationTransition.type';
import PopulationTransitionTemplate from '../components/templates/PopulationTransition/PopulationTransition.template';
import { mockPopulationData, mockPrefecturesData } from '../services/mock';
import { PrefecturesDataType } from '../types/prefectures.type';
import { deepCopy } from '../services/utils';
import { PopulationDataType, PopulationKindsType } from '../types/populationGraph.type';
import { filterPopulationData } from '../logics/populationTransition.logic';
import { getHello } from '../api/hello.api';

const PopulationTransition: React.FC = () => {
  // 都道府県一覧画面のstate
  const [prefecturesData, setPrefecturesData] =
    useState<PrefecturesDataType[]>(mockPrefecturesData);
  // 人口グラフの種類のstate
  const [checkedPopulationKinds, setCheckedPopulationKinds] =
    useState<PopulationKindsType>('総人口');
  // 人口データのstate
  const [populationData, setPopulationData] = useState<PopulationDataType[]>([]);

  // TODO RESASのAPIを使用するとき削除する
  useEffect(() => {
    getHello()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
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

export default PopulationTransition;
