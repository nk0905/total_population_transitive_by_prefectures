import React from 'react';
import { PopulationTransitionTemplatePropsType } from '../types/populationTransition.type';
import PopulationTransitionTemplate from '../components/templates/PopulationTransition/PopulationTransition.template';

const PopulationTransition: React.FC = () => {
  const props: PopulationTransitionTemplatePropsType = {
    headerProps: {
      title: '都道府県別の人口推移グラフ',
    },
  };
  return <PopulationTransitionTemplate {...props} />;
};

export default PopulationTransition;
