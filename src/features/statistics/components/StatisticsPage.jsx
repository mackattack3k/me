import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import LoadingPage from '../../loading/components/LoadingPage';

const GithubStatistics = lazy(() => import('./GithubStatistics'));
const SpotifyStatistics = lazy(() => import('./SpotifyStatistics'));

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const StatisticsPage = () => (
  <Statistics>
    <Suspense fallback={<LoadingPage />}>
      <GithubStatistics />
      <SpotifyStatistics />
    </Suspense>
  </Statistics>
);

export default StatisticsPage;
