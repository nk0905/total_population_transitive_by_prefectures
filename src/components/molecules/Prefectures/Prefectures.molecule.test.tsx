import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { PrefecturesPropsType } from '../../../types/prefectures.type';
import { Prefectures } from './Prefectures.molecule';

const onChangeMock = jest.fn();
const prefecturesProps: PrefecturesPropsType = {
  prefecturesData: [
    {
      prefCode: 1,
      prefName: '北海道',
      isChecked: false,
    },
    {
      prefCode: 2,
      prefName: '青森県',
      isChecked: false,
    },
  ],
  events: {
    onChangePrefecturesCheckbox: onChangeMock,
  },
};

test('初期表示時、チェックボックスがチェックされていないことをテストする', () => {
  render(<Prefectures {...prefecturesProps} />);
  prefecturesProps.prefecturesData.map((prefData) => {
    const checkbox = screen.getByRole('checkbox', { name: prefData.prefName });
    expect(checkbox).not.toBeChecked();
  });
});

test('チェックボックス押下時、onChangePrefecturesCheckboxが発火することをテストする', () => {
  render(<Prefectures {...prefecturesProps} />);
  prefecturesProps.prefecturesData.map((prefData) => {
    const checkbox = screen.getByLabelText(prefData.prefName);
    fireEvent.click(checkbox);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
