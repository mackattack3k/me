import { ApolloProvider } from '@apollo/react-hooks';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ApolloBoostClient from 'apollo-boost';
import styled from 'styled-components';
import H1 from '../../text/components/H1';
import Contributions from './Contributions';
import SpotifyStatistics from './SpotifyStatistics';

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const GitHelp = styled.div`
  margin: 0 8px;
`;

const StatisticsPage = () => {
  const { t } = useTranslation();
  const githubClient = new ApolloBoostClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  });
  return (
    <Statistics>
      <ApolloProvider client={githubClient}>
        <H1>
          Github <FontAwesomeIcon icon={faGithub} />
        </H1>
        <GitHelp>{t('statistics.github')}</GitHelp>
        <Contributions />
      </ApolloProvider>
      <SpotifyStatistics />
    </Statistics>
  );
};

export default StatisticsPage;
