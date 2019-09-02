import {
  faEnvelope,
  faGamepad,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import { HOME_PAGE } from '../../home/homeRoutes';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import NavigationItem from './NavigationItem';

const Background = styled.div`
  background: ${props => props.theme.dark.primary.main};
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
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
        <NavigationItem to={HOME_PAGE} icon={faUser}>
          {t('routes.home')}
        </NavigationItem>
        <NavigationItem to={CONTACT_PAGE} icon={faEnvelope}>
          {t('routes.contact')}
        </NavigationItem>
        <NavigationItem to={STATISTICS_PAGE} icon={faGamepad}>
          {t('routes.statistics')}
        </NavigationItem>
      </Nav>
    </Background>
  );
};

export default HeaderNavigation;
