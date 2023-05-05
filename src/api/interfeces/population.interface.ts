type AllCity = '-';
export interface GetPoplationParams {
  cityCode: number | AllCity;
  prefCode: number;
}

export interface GetPoplationResponseType {
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
}
