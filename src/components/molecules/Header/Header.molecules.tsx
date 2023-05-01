import React from 'react';
import './Header.molecules.scss';

export interface HeaderPropsType {
  title: string;
}

const Header: React.FC<HeaderPropsType> = ({ title }) => {
  return <header className="header">{title}</header>;
};

export default Header;
