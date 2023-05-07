import React, { useEffect, useState } from 'react';
import { GetPoplationParams } from '../api/interfeces/population.interface';
import { getPopulation } from '../api/population.api';
import { getPrefectures } from '../api/prefectures.api';
import {
  PopulationDataType,
  PopulationKindsType,
} from '../components/molecules/PoplationGraph/PoplationGraph.molecule';
import { PrefecturesDataType } from '../components/molecules/Prefectures/Prefectures.molecule';
import PoplationTransitionTemplate, {
  PoplationTransitionTemplatePropsType,
} from '../components/templates/PoplationTransition/PoplationTransition.template';
import { filterPoplationData } from '../logics/populationTransition.logic';
import { All_CITY_PARAM } from '../services/consts';
import { deepCopy } from '../services/utils';

const PoplationTransition: React.FC = () => {
  // 都道府県一覧画面のstate
  const [prefecturesData, setPrefecturesData] = useState<PrefecturesDataType[]>([]);

  // 人口グラフ画面のstate
  const [checkedPopulationKinds, setCheckedPopulationKinds] =
    useState<PopulationKindsType>('総人口');
  const [populationData, setPopulationData] = useState<PopulationDataType[]>([]);

  // 47都道府県のデータの取得
  useEffect(() => {
    getPrefectures().then((res) => {
      const newPrefecturesData: PrefecturesDataType[] = res.result.map((prefecture) => {
        return { ...prefecture, isChecked: false };
      });
      setPrefecturesData(newPrefecturesData);
    });
  }, []);

  // 都道府県一覧画面の関数
  const handleChangePrefecturesCheckbox = (index: number) => {
    const editPrefecturesData = deepCopy(prefecturesData);
    const editPopulationData = deepCopy(populationData);

    editPrefecturesData[index].isChecked = !editPrefecturesData[index].isChecked;
    // チェック済みの場合、選択された都道府県のデータのみを削除する
    if (prefecturesData[index].isChecked) {
      const newPopulationData = filterPoplationData(
        editPrefecturesData[index].prefName,
        editPopulationData
      );
      setPopulationData(newPopulationData);
      setPrefecturesData(editPrefecturesData);
      return;
    }

    // 新たに都道府県がチェックされた場合、その都道府県の人口データを取得する
    const params: GetPoplationParams = {
      cityCode: All_CITY_PARAM,
      prefCode: editPrefecturesData[index].prefCode,
    };
    getPopulation(params).then((res) => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      res.result.data.map((populationData) => {
        editPopulationData.push({
          ...populationData,
          prefName: editPrefecturesData[index].prefName,
          lineChartStrokeColor: `rgb(${r}, ${g}, ${b})`,
        });
      });
      setPrefecturesData(editPrefecturesData);
      setPopulationData(editPopulationData);
    });
  };

  // 都道府県別人口グラフ画面の関数
  const handleClickPopulationKindsTab = (tab: PopulationKindsType) => {
    setCheckedPopulationKinds(tab);
  };

  const props: PoplationTransitionTemplatePropsType = {
    headerProps: {
      title: '都道府県別の人口推移グラフ',
    },
    prefectureProps: {
      prefecturesData: prefecturesData,
      events: {
        onChangePrefecturesCheckbox: handleChangePrefecturesCheckbox,
      },
    },
    populationGraphProps: {
      checkedPopulationKinds: checkedPopulationKinds,
      populationData: populationData,
      events: {
        onClickPopulationKindsTab: handleClickPopulationKindsTab,
      },
    },
  };
  return <PoplationTransitionTemplate {...props} />;
};

export default PoplationTransition;
