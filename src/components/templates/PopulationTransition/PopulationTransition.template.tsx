import React from 'react';
import Header from '../../molecules/Header/Header.molecule';
import { PopulationTransitionTemplatePropsType } from '../../../types/populationTransition.type';
import { Prefectures } from '../../molecules/Prefectures/Prefectures.molecule';

const PopulationTransitionTemplate: React.FC<PopulationTransitionTemplatePropsType> = ({
  headerProps,
  prefecturesProps,
}) => {
  return (
    <>
      <Header {...headerProps} />
      <Prefectures {...prefecturesProps} />
    </>
  );
};

export default PopulationTransitionTemplate;
