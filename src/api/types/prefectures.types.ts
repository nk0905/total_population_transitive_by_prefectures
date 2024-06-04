type PrefecturesDataType = {
  prefCode: number;
  prefName: string;
};

export type GetPrefecturesResponseType = {
  message: string;
  result: PrefecturesDataType[];
};
