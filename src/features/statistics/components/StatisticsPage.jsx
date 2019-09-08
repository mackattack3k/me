import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../../loading/components/LoadingSpinner';

const GithubStatistics = lazy(() => import('./GithubStatistics'));
const SpotifyStatistics = lazy(() => import('./SpotifyStatistics'));

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StatisticsPage = () => (
  <Statistics>
    <Suspense fallback={<LoadingSpinner />}>
      <GithubStatistics />
      <SpotifyStatistics />
    </Suspense>
  </Statistics>
);

export default StatisticsPage;
