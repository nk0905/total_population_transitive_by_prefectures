import React from 'react';
import Highcharts from 'highcharts';
import accessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';
import populationGraphStyle from './PopulationGraph.molecule.module.scss';
import { PopulationGraphPropsType } from '../../../types/populationGraph.type';
import { populationKinds } from '../../../services/constants';
// accessibilityモジュールを有効にする
accessibility(Highcharts);

const PopulationGraph: React.FC<PopulationGraphPropsType> = ({
  checkedPopulationKinds,
  populationData,
  events,
}) => {
  if (populationData.length === 0) {
    return <></>;
  }
  const targetData = populationData.filter((data) => data.label === checkedPopulationKinds);
  const categories = targetData[0].data.map((populationData) => String(populationData.year));
  const series: Highcharts.SeriesOptionsType[] = [];

  for (const data of targetData) {
    series.push({
      name: data.prefName,
      data: data.data.map((data) => data.value),
      type: 'line',
    });
  }

  const chartOption: Highcharts.Options = {
    title: {
      text: targetData[0].label,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    xAxis: {
      title: {
        text: '年',
      },
      categories: categories,
    },
    series,
  };

  return (
    <div className={populationGraphStyle.populationGraph}>
      <p className={populationGraphStyle.populationGraphLabel}>
        <span className={populationGraphStyle.numberLabel}>02</span>表示するグラフを選択
      </p>
      <div className={populationGraphStyle.populationGraphTab}>
        {Object.values(populationKinds).map((kind) => {
          return (
            <label key={kind} className={populationGraphStyle.tabLabel}>
              <input
                className={populationGraphStyle.tabInput}
                type="radio"
                checked={checkedPopulationKinds === kind}
                onChange={() => events.onChangePopulationKindsTab(kind)}
              />
              {kind}
            </label>
          );
        })}
      </div>
      <HighchartsReact highcharts={Highcharts} options={chartOption} />
    </div>
  );
};

PopulationGraph.whyDidYouRender = true;
export default PopulationGraph;
