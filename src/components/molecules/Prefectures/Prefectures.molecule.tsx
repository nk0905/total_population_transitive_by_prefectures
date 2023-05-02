import React from 'react';
import './Prefectures.molecule.scss';

export interface PrefecturesDataType {
  prefCode: number;
  prefName: string;
  isChecked: boolean;
}

export interface PrefecturesPropsType {
  prefecturesData: PrefecturesDataType[];
  events: {
    onChangePrefecturesCheckbox: (index: number) => void;
  };
}

const Prefectures: React.FC<PrefecturesPropsType> = ({ prefecturesData, events }) => {
  return (
    <div className="prefectures">
      <p className="prefectures-label">都道府県</p>
      <div className="prefecutures-list">
        {prefecturesData.map((data, index) => {
          return (
            <div key={index} className="list-one">
              <input
                id={`prefCode${index}`}
                type="checkbox"
                onChange={() => events.onChangePrefecturesCheckbox(index)}
                checked={data.isChecked}
              />
              <label htmlFor={`prefCode${index}`}>{data.prefName}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Prefectures;
