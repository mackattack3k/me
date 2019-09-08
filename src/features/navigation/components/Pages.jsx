import { Router } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import ContactPage from '../../contact/components/ContactPage';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import HomePage from '../../home/components/HomePage';
import { HOME_PAGE } from '../../home/homeRoutes';
import SettingsPage from '../../settings/components/SettingsPage';
import SpotifyAuthorize from '../../spotify/components/SpotifyAuthorize';
import { AUTHORIZE_SPOTIFY } from '../../spotify/spotifyRoutes';
import StatisticsPage from '../../statistics/components/StatisticsPage';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import { SETTINGS_PAGE } from '../../settings/settingsRoutes';

const Page = styled.div`
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  background: ${props =>
    `linear-gradient(to top, ${props.theme.backgroundFadeFrom}, ${props.theme.background})`};
  color: ${props => props.theme.primary.text};
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  @media (max-width: 900px) {
    padding: 20px 10px;
  }
`;

const Pages = () => (
  <Page>
    <Router style={{ width: '100%' }}>
      <HomePage path={HOME_PAGE} />
      <StatisticsPage path={STATISTICS_PAGE} />
      <ContactPage path={CONTACT_PAGE} />
      <SettingsPage path={SETTINGS_PAGE} />
      <SpotifyAuthorize path={AUTHORIZE_SPOTIFY} />
    </Router>
  </Page>
);

export default Pages;
