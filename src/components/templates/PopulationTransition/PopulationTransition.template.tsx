import React from 'react';
import Header from '../../molecules/Header/Header.molecules';
import { PopulationTransitionTemplatePropsType } from '../../../types/populationTransition.type';

const PopulationTransitionTemplate: React.FC<PopulationTransitionTemplatePropsType> = ({
  headerProps,
}) => {
  return <Header {...headerProps} />;
};

export default PopulationTransitionTemplate;
