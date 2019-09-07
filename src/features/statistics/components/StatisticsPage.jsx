import React from 'react';
import styled from 'styled-components';
import GithubStatistics from './GithubStatistics';
import SpotifyStatistics from './SpotifyStatistics';

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StatisticsPage = () => (
  <Statistics>
    <GithubStatistics />
    <SpotifyStatistics />
  </Statistics>
);

export default StatisticsPage;
