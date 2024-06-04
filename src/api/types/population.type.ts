type AllCity = '-';
export type GetPopulationParams = {
  cityCode: number | AllCity;
  prefCode: number;
};

export type GetPopulationResponseType = {
  message: string;
  result: {
    boundaryYear: number;
    data: {
      label: string;
      data: {
        year: number;
        value: number;
      }[];
    }[];
  };
};
