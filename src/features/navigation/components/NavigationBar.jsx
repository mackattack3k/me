import {
  faCog,
  faEnvelope,
  faGlasses,
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
import NavBarItem from './NavBarItem';

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
  margin-top: 20px;
`;

const NavigationBar = () => {
  const { t } = useTranslation();
  return (
    <Background>
      <ProfileBadge />
      <Nav>
        <NavBarItem
          to={HOME_PAGE}
          icon={faUser}
          ariaLabel="Go back to start page"
        >
          {t('routes.home')}
        </NavBarItem>
        <NavBarItem
          to={STATISTICS_PAGE}
          icon={faGlasses}
          ariaLabel="See all statistics"
        >
          {t('routes.statistics')}
        </NavBarItem>
        <NavBarItem
          to={SETTINGS_PAGE}
          icon={faCog}
          ariaLabel="Change page settings"
        >
          {t('routes.settings')}
        </NavBarItem>
        <NavBarItem
          to={CONTACT_PAGE}
          icon={faEnvelope}
          ariaLabel="Contact page owner"
        >
          {t('routes.contact')}
        </NavBarItem>
      </Nav>
    </Background>
  );
};

export default NavigationBar;
