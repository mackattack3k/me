import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import ApolloBoostClient from 'apollo-boost';
import H1 from '../../text/components/H1';
import Contributions from './Contributions';
import StatisticsPageContent from './StatisticsPageContent';

const GithubStatistics = () => {
  const { t } = useTranslation();
  const githubClient = new ApolloBoostClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  });
  return (
    <ApolloProvider client={githubClient}>
      <H1>
        Github <FontAwesomeIcon icon={faGithub} />
      </H1>
      <StatisticsPageContent>{t('statistics.github')}</StatisticsPageContent>
      <StatisticsPageContent>
        <Contributions />
      </StatisticsPageContent>
    </ApolloProvider>
  );
};

GithubStatistics.propTypes = {};

export default GithubStatistics;
