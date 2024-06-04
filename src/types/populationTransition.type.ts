import { HeaderPropsType } from './header.type';
import { PopulationGraphPropsType } from './populationGraph.type';
import { PrefecturesPropsType } from './prefectures.type';

export type PopulationTransitionTemplatePropsType = {
  headerProps: HeaderPropsType;
  prefecturesProps: PrefecturesPropsType;
  populationGraphProps: PopulationGraphPropsType;
};
