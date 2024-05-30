import React from 'react';
import './Header.molecules.scss';
import { HeaderPropsType } from '../../../types/header.type';

const HeaderComponent: React.FC<HeaderPropsType> = ({ title }) => {
  return <header className="header">{title}</header>;
};

const Header = React.memo(HeaderComponent);
Header.whyDidYouRender = true;
export default Header;
