interface PrefecturesDataType {
  prefCode: number;
  prefName: string;
}
export interface GetPrefecturesResponseType {
  message: string;
  result: PrefecturesDataType[];
}
