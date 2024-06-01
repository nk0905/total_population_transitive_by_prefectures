import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderPropsType } from '../../../types/header.type';
import Header from './Header.molecule';

test('タイトルが正しく表示されていることをテストする', () => {
  const headerProps: HeaderPropsType = {
    title: '都道府県別の人口推移グラフ',
  };
  render(<Header {...headerProps} />);

  expect(screen.getByText('都道府県別の人口推移グラフ')).toBeInTheDocument();
});
