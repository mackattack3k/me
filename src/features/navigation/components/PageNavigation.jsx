import {
  faEnvelope,
  faGamepad,
  faPalette,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import { HOME_PAGE } from '../../home/homeRoutes';
import ProfileBadge from '../../profile/components/ProfileBadge';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import { SETTINGS_PAGE } from '../../settings/settingsRoutes';
import NavigationItem from './NavigationItem';

const Background = styled.div`
  background: ${props =>
    `linear-gradient(to top, ${props.theme.primary.light}, ${props.theme.primary.main})`};
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  width: 130px;
  @media (max-width: 900px) {
    width: 60px;
    padding: 20px 0;
  }
`;
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const PageNavigation = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <ProfileBadge />
      <Nav>
        <NavigationItem to={HOME_PAGE} icon={faUser}>
          {t('routes.home')}
        </NavigationItem>
        <NavigationItem to={STATISTICS_PAGE} icon={faGamepad}>
          {t('routes.statistics')}
        </NavigationItem>
        <NavigationItem to={SETTINGS_PAGE} icon={faPalette}>
          {t('routes.settings')}
        </NavigationItem>
        <NavigationItem to={CONTACT_PAGE} icon={faEnvelope}>
          {t('routes.contact')}
        </NavigationItem>
      </Nav>
    </Background>
  );
};

export default PageNavigation;
