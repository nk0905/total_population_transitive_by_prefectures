import React from 'react';
import { render, screen } from '@testing-library/react';
import { PopulationGraphPropsType } from '../../../types/populationGraph.type';
import PopulationGraph from './PopulationGraph.molecule';

const onChangeMock = jest.fn();
const emptyDataPopulationGraphProps: PopulationGraphPropsType = {
  checkedPopulationKinds: '総人口',
  populationData: [],
  events: {
    onChangePopulationKindsTab: onChangeMock,
  },
};

const existsDataPopulationGraphProps: PopulationGraphPropsType = {
  checkedPopulationKinds: '総人口',
  populationData: [
    {
      label: '総人口',
      data: [
        {
          year: 2020,
          value: 9302,
        },
      ],
      prefName: '北海道',
    },
    {
      label: '年少人口',
      data: [
        {
          year: 2020,
          value: 936,
        },
      ],
      prefName: '北海道',
    },
    {
      label: '生産年齢人口',
      data: [
        {
          year: 2020,
          value: 4756,
        },
      ],
      prefName: '北海道',
    },
    {
      label: '老年人口',
      data: [
        {
          year: 2020,
          value: 3578,
        },
      ],
      prefName: '北海道',
    },
  ],
  events: {
    onChangePopulationKindsTab: onChangeMock,
  },
};

test('初期表示時、チャートが表示されていないことをテストする', () => {
  render(<PopulationGraph {...emptyDataPopulationGraphProps} />);
  expect(() => screen.getByText('表示するグラフを選択')).toThrow();
});

test('人口データがあるとき、チャートが表示されていることをテストする', () => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
    }));
  render(<PopulationGraph {...existsDataPopulationGraphProps} />);
  expect(screen.getByText('表示するグラフを選択')).toBeInTheDocument();
});
