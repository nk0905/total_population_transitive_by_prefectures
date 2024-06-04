export type PrefecturesDataType = {
  prefCode: number;
  prefName: string;
  isChecked: boolean;
};

export type PrefecturesPropsType = {
  prefecturesData: PrefecturesDataType[];
  events: {
    onChangePrefecturesCheckbox: (index: number) => void;
  };
};
