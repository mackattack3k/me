import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import { HOME_PAGE } from '../../home/homeRoutes';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import NavLink from './NavLink';

const Background = styled.div`
  background: ${props => props.theme.dark.primary.main};
  padding: 20px;
  height: 100vh;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderNavigation = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <div>mackattack3k</div>
      <Nav>
        <NavLink to={HOME_PAGE}>{t('routes.home')}</NavLink>
        <NavLink to={CONTACT_PAGE}>{t('routes.contact')}</NavLink>
        <NavLink to={STATISTICS_PAGE}>{t('routes.statistics')}</NavLink>
      </Nav>
    </Background>
  );
};

export default HeaderNavigation;
