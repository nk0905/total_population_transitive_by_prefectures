import React from 'react';
import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import PoplationGraph, {
  PopulationGraphPropsType,
} from '../components/molecules/PoplationGraph/PoplationGraph.molecule';
import Prefectures, {
  PrefecturesPropsType,
} from '../components/molecules/Prefectures/Prefectures.molecule';

const populationData = [
  {
    label: '総人口',
    data: [
      {
        year: 1960,
        value: 5039206,
      },
    ],
    prefName: '北海道',
    lineChartStrokeColor: 'rgb(0, 0, 0)',
  },
  {
    label: '年少人口',
    data: [
      {
        year: 1960,
        value: 1681479,
        rate: 33.3,
      },
    ],
    prefName: '北海道',
    lineChartStrokeColor: 'rgb(0, 0, 0)',
  },
  {
    label: '生産年齢人口',
    data: [
      {
        year: 1960,
        value: 3145664,
        rate: 62.4,
      },
    ],
    prefName: '北海道',
    lineChartStrokeColor: 'rgb(0, 0, 0)',
  },
  {
    label: '老年人口',
    data: [
      {
        year: 1960,
        value: 212063,
        rate: 4.2,
      },
    ],
    prefName: '北海道',
    lineChartStrokeColor: 'rgb(0, 0, 0)',
  },
];
describe('人口推移グラフ画面', () => {
  it('初期表示時、都道府県のみ表示される', () => {
    const onChangeMock = jest.fn();
    const prefecturesProps: PrefecturesPropsType = {
      prefecturesData: [
        {
          prefCode: 1,
          prefName: '北海道',
          isChecked: false,
        },
      ],
      events: {
        onChangePrefecturesCheckbox: onChangeMock,
      },
    };
    render(<Prefectures {...prefecturesProps} />);
    expect(screen.queryByText('表示するグラフを選択')).toBeNull();
  });

  it('任意の都道府県ボタン押下で人口遷移グラフ画面が表示される', () => {
    const onChangeMock = jest.fn();
    window.ResizeObserver =
      window.ResizeObserver ||
      jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
      }));
    const handleChangePrefecturesCheckbox = () => {
      const populationGraphProps: PopulationGraphPropsType = {
        checkedPopulationKinds: '総人口',
        populationData: populationData,
        events: {
          onClickPopulationKindsTab: onChangeMock,
        },
      };
      render(<PoplationGraph {...populationGraphProps} />);
    };
    const prefecturesProps: PrefecturesPropsType = {
      prefecturesData: [
        {
          prefCode: 1,
          prefName: '北海道',
          isChecked: true,
        },
      ],
      events: {
        onChangePrefecturesCheckbox: handleChangePrefecturesCheckbox,
      },
    };
    render(<Prefectures {...prefecturesProps} />);
    const onButtonElement = screen.getByRole('checkbox', { name: '北海道' });
    userEvent.click(onButtonElement);
    screen.getByText('表示するグラフを選択');
  });
});
