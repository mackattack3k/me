import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import GithubClient from '../../github/GithubClient';
import H1 from '../../text/components/H1';
import Contributions from './Contributions';
import StatisticsPageContent from './StatisticsPageContent';

const GithubStatistics = () => {
  const { t } = useTranslation();
  return (
    <ApolloProvider client={GithubClient}>
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
