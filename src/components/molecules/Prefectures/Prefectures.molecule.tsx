import React from 'react';
import prefectureStyle from './Prefectures.molecule.module.scss';
import { PrefecturesPropsType } from '../../../types/prefectures.type';

export const Prefectures: React.FC<PrefecturesPropsType> = ({ prefecturesData, events }) => {
  return (
    <div className={prefectureStyle.prefectures}>
      <h1 className={prefectureStyle.prefecturesLabel}>
        <span className={prefectureStyle.numberLabel}>01</span>都道府県を選択
      </h1>
      <div className={prefectureStyle.prefecturesList}>
        {prefecturesData.map((data, index) => {
          return (
            <div key={index} className={prefectureStyle.listOne}>
              <input
                id={String(data.prefCode)}
                className={prefectureStyle.checkbox}
                type="checkbox"
                onChange={() => events.onChangePrefecturesCheckbox(index)}
                checked={data.isChecked}
              />
              <label className={prefectureStyle.prefectureLabel} htmlFor={String(data.prefCode)}>
                {data.prefName}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Prefectures.whyDidYouRender = true;
