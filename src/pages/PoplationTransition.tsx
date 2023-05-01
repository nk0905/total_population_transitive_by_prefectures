import React from 'react';
import PoplationTransitionTemplate, {
  PoplationTransitionTemplatePropsType,
} from '../components/templates/PoplationTransition/PoplationTransition.template';

const PoplationTransition: React.FC = () => {
  const props: PoplationTransitionTemplatePropsType = {
    headerProps: {
      title: '都道府県別の総人口推移グラフ',
    },
  };
  return <PoplationTransitionTemplate {...props} />;
};

export default PoplationTransition;
