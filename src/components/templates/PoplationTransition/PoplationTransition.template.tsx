import React from 'react';
import Header, { HeaderPropsType } from '../../molecules/Header/Header.molecules';

export interface PoplationTransitionTemplatePropsType {
  headerProps: HeaderPropsType;
}

const PoplationTransitionTemplate: React.FC<PoplationTransitionTemplatePropsType> = ({
  headerProps,
}) => {
  return <Header {...headerProps} />;
};

export default PoplationTransitionTemplate;
