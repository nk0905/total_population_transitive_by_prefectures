import { populationKinds } from '../services/constants';

export type PopulationKindsType = (typeof populationKinds)[keyof typeof populationKinds];

export type PopulationDataType = {
  prefName: string;
  label: string;
  data: {
    year: number;
    value: number;
  }[];
};

export type PopulationGraphPropsType = {
  checkedPopulationKinds: PopulationKindsType;
  populationData: PopulationDataType[];
  events: {
    onChangePopulationKindsTab: (tab: PopulationKindsType) => void;
  };
};
