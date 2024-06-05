import React from 'react';
import { ErrorPropsType } from '../../../types/error.type';
import errorStyle from './Error.template.module.scss';
import Header from '../../molecules/Header/Header.molecule';

const ErrorTemplate: React.FC<ErrorPropsType> = ({ message }) => {
  return (
    <div className={errorStyle.errorContainer}>
      <Header title="エラー" />
      <div className={errorStyle.errorContent}>
        <p>{message}</p>
        <a href="/population-transition">都道府県別の人口推移グラフに戻る</a>
      </div>
    </div>
  );
};

ErrorTemplate.whyDidYouRender = true;
export default ErrorTemplate;
