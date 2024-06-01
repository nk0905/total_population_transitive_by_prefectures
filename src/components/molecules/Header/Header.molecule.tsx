import React from 'react';
import headerStyle from './Header.molecule.module.scss';
import { HeaderPropsType } from '../../../types/header.type';

const HeaderComponent: React.FC<HeaderPropsType> = ({ title }) => {
  return <header className={headerStyle.header}>{title}</header>;
};

const Header = React.memo(HeaderComponent);
Header.whyDidYouRender = true;
export default Header;
