import { Router } from '@reach/router';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import { HOME_PAGE } from '../../home/homeRoutes';
import LoadingSpinner from '../../loading/components/LoadingSpinner';
import SpotifyAuthorize from '../../spotify/components/SpotifyAuthorize';
import { AUTHORIZE_SPOTIFY } from '../../spotify/spotifyRoutes';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import { SETTINGS_PAGE } from '../../settings/settingsRoutes';
import NotFoundPage from './NotFoundPage';
const StatisticsPage = lazy(() =>
  import('../../statistics/components/StatisticsPage')
);
const SettingsPage = lazy(() =>
  import('../../settings/components/SettingsPage')
);
const ContactPage = lazy(() => import('../../contact/components/ContactPage'));
const HomePage = lazy(() => import('../../home/components/HomePage'));

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
  box-shadow: -5px 0 10px -5px rgba(50, 50, 50, 0.3),
    0px -5px 10px -5px rgba(50, 50, 50, 0.3);
  @media (max-width: 900px) {
    padding: 20px 10px;
  }
`;

const Pages = () => (
  <Page>
    <Suspense fallback={<LoadingSpinner />}>
      <Router style={{ width: '100%' }}>
        <HomePage path={HOME_PAGE} />
        <StatisticsPage path={STATISTICS_PAGE} />
        <ContactPage path={CONTACT_PAGE} />
        <SettingsPage path={SETTINGS_PAGE} />
        <SpotifyAuthorize path={AUTHORIZE_SPOTIFY} />
        <NotFoundPage default />
      </Router>
    </Suspense>
  </Page>
);

export default Pages;
