import React, { useState } from 'react';
import { PopulationTransitionTemplatePropsType } from '../types/populationTransition.type';
import PopulationTransitionTemplate from '../components/templates/PopulationTransition/PopulationTransition.template';
import { mockPrefecturesData } from '../services/mock';
import { PrefecturesDataType } from '../types/prefectures.type';
import { deepCopy } from '../services/utils';

const PopulationTransition: React.FC = () => {
  // 都道府県一覧画面のstate
  const [prefecturesData, setPrefecturesData] =
    useState<PrefecturesDataType[]>(mockPrefecturesData);

  // 都道府県一覧画面の関数
  const handleChangePrefecturesCheckbox = (index: number) => {
    const editPrefecturesData = deepCopy(prefecturesData);
    editPrefecturesData[index].isChecked = !editPrefecturesData[index].isChecked;
    setPrefecturesData(editPrefecturesData);
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
  };
  return <PopulationTransitionTemplate {...props} />;
};

export default PopulationTransition;
