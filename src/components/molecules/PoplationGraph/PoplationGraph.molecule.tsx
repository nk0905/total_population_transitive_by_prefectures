import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './PoplationGraph.molecule.scss';

export const populationKinds = {
  total: '総人口',
  young: '年少人口',
  productionAge: '生産年齢人口',
  geriatric: '老年人口',
} as const;

export type PopulationKindsType = (typeof populationKinds)[keyof typeof populationKinds];

export interface PopulationDataType {
  prefName: string;
  label: string;
  lineChartStrokeColor: string;
  data: {
    year: number;
    value: number;
  }[];
}

export interface PopulationGraphPropsType {
  checkedPopulationKinds: PopulationKindsType;
  populationData: PopulationDataType[];
  events: {
    onClickPopulationKindsTab: (tab: PopulationKindsType) => void;
  };
}

const PoplationGraph: React.FC<PopulationGraphPropsType> = ({
  checkedPopulationKinds,
  populationData,
  events,
}) => {
  if (populationData.length === 0) {
    return <></>;
  }
  const targetData = populationData.filter((data) => data.label === checkedPopulationKinds);
  return (
    <div className="population-graph">
      <p className="population-graph-label">
        <span>02</span>表示するグラフを選択
      </p>
      <div className="population-graph-tab">
        <label>
          <input
            type="radio"
            checked={checkedPopulationKinds === populationKinds.total}
            onClick={() => events.onClickPopulationKindsTab(populationKinds.total)}
          />
          総人口
        </label>

        <label>
          <input
            type="radio"
            checked={checkedPopulationKinds === populationKinds.young}
            onClick={() => events.onClickPopulationKindsTab(populationKinds.young)}
          />
          年少人口
        </label>

        <label>
          <input
            type="radio"
            checked={checkedPopulationKinds === populationKinds.productionAge}
            onClick={() => events.onClickPopulationKindsTab(populationKinds.productionAge)}
          />
          生産年齢人口
        </label>

        <label>
          <input
            type="radio"
            value={populationKinds.geriatric}
            checked={checkedPopulationKinds === populationKinds.geriatric}
            onClick={() => events.onClickPopulationKindsTab(populationKinds.geriatric)}
          />
          老年人口
        </label>
      </div>

      <ResponsiveContainer minHeight={'500px'}>
        <LineChart
          margin={{
            top: 20,
            right: 20,
            left: 15,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="year"
            tickSize={10}
            allowDuplicatedCategory={false}
            label={{
              value: '年度(年)',
              offset: -15,
              position: 'insideBottomRight',
            }}
          />
          <YAxis
            dataKey="value"
            tickSize={10}
            label={{
              value: '人口数(万人)',
              offset: -18,
              position: 'insideTopRight',
            }}
            padding={{ top: 1 }}
          />
          <Tooltip />
          <Legend />
          {targetData.map((tData) => {
            const filteredByYearData = tData.data.filter((data) => data.year < 2021);
            const processPopulation = filteredByYearData.map((data) => {
              return { ...data, value: data.value / 10000 };
            });
            return (
              <Line
                type="monotone"
                dataKey="value"
                data={processPopulation}
                name={tData.prefName}
                key={tData.prefName}
                stroke={tData.lineChartStrokeColor}
              />
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PoplationGraph;
