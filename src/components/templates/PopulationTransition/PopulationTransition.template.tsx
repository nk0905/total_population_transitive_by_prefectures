import React from 'react';
import Header from '../../molecules/Header/Header.molecule';
import { PopulationTransitionTemplatePropsType } from '../../../types/populationTransition.type';
import { Prefectures } from '../../molecules/Prefectures/Prefectures.molecule';
import PopulationGraph from '../../molecules/PopulationGraph/PopulationGraph.molecule';
import { LoadingComponent } from '../../molecules/Loading/Loading.molecule';

const PopulationTransitionTemplate: React.FC<PopulationTransitionTemplatePropsType> = ({
  isLoading,
  headerProps,
  prefecturesProps,
  populationGraphProps,
}) => {
  return (
    <>
      <LoadingComponent isLoading={isLoading} />
      <Header {...headerProps} />
      <Prefectures {...prefecturesProps} />
      <PopulationGraph {...populationGraphProps} />
    </>
  );
};

export default PopulationTransitionTemplate;
