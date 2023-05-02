import React from 'react';
import Header, { HeaderPropsType } from '../../molecules/Header/Header.molecules';
import Prefectures, {
  PrefecturesPropsType,
} from '../../molecules/Prefectures/Prefectures.molecule';

export interface PoplationTransitionTemplatePropsType {
  headerProps: HeaderPropsType;
  prefectureProps: PrefecturesPropsType;
}

const PoplationTransitionTemplate: React.FC<PoplationTransitionTemplatePropsType> = ({
  headerProps,
  prefectureProps,
}) => {
  return (
    <>
      <Header {...headerProps} />
      <Prefectures {...prefectureProps} />
    </>
  );
};

export default PoplationTransitionTemplate;
