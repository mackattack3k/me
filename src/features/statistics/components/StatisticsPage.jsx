import { ApolloProvider } from '@apollo/react-hooks';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import ApolloBoostClient from 'apollo-boost';
import styled from 'styled-components';
import Button from '../../button/components/Button';
import H1 from '../../text/components/H1';
import { SpotifyAccessContext } from '../../spotify/components/SpotifyAccessProvider';
import Contributions from './Contributions';

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
  const { AUTHORIZATION, authorize } = useContext(SpotifyAccessContext);
  return (
    <Statistics>
      <ApolloProvider client={githubClient}>
        <H1>
          Github <FontAwesomeIcon icon={faGithub} />
        </H1>
        <GitHelp>{t('statistics.github')}</GitHelp>
        <Contributions />
      </ApolloProvider>
      {AUTHORIZATION ? (
        <div>Show spotify data</div>
      ) : (
        <Button onClick={authorize}>Login to Spotify</Button>
      )}
      {/* <SpotifyStatistics /> */}
    </Statistics>
  );
};

export default StatisticsPage;
