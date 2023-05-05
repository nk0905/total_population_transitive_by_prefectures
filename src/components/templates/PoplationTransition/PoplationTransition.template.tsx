import React from 'react';
import Header, { HeaderPropsType } from '../../molecules/Header/Header.molecules';
import Prefectures, {
  PrefecturesPropsType,
} from '../../molecules/Prefectures/Prefectures.molecule';
import PoplationGraph, {
  PopulationGraphPropsType,
} from '../../molecules/PoplationGraph/PoplationGraph.molecule';

export interface PoplationTransitionTemplatePropsType {
  headerProps: HeaderPropsType;
  prefectureProps: PrefecturesPropsType;
  populationGraphProps: PopulationGraphPropsType;
}

const PoplationTransitionTemplate: React.FC<PoplationTransitionTemplatePropsType> = ({
  headerProps,
  prefectureProps,
  populationGraphProps,
}) => {
  return (
    <>
      <Header {...headerProps} />
      <Prefectures {...prefectureProps} />
      <PoplationGraph {...populationGraphProps} />
    </>
  );
};

export default PoplationTransitionTemplate;
