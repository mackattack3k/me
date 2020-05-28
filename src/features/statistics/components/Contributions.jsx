import { useQuery } from '@apollo/client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import deepGet from '../../deepGet';
import ErrorPage from '../../error/components/ErrorPage';
import ExternalLink from '../../navigation/components/ExternalLink';
import { GITHUB_CONTRIBUTIONS } from '../statisticsQueries';
import StatisticsCard from './StatisticsCard';
import StatisticsCardData from './StatisticsCardData';
import StatisticsComment from './StatisticsComment';

const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

const NO_HITS = 0;

const Contributions = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GITHUB_CONTRIBUTIONS);
  console.log({ loading, error, data });
  if (error) {
    return <ErrorPage />;
  }
  const totalCommitContributions =
    deepGet(data, [
      'user',
      'contributionsCollection',
      'totalCommitContributions'
    ]) || NO_HITS;
  const issueCount = deepGet(data, ['search', 'issueCount']) || 0;
  const latestStar = deepGet(data, [
    'user',
    'starredRepositories',
    'nodes',
    '0'
  ]);
  const { url: latestStarRepoUrl = '', name: latestStarRepoName = '', owner } =
    latestStar || {};
  const { url: latestStarOrgUrl = '', login: latestStarOrg = '' } = owner || {};
  return (
    <ContributionsContainer>
      <StatisticsCard>
        <StatisticsCardData isLoading={loading}>
          {totalCommitContributions}
        </StatisticsCardData>
        <StatisticsComment>{t('git.total_commits')}</StatisticsComment>
      </StatisticsCard>
      <StatisticsCard>
        <StatisticsCardData isLoading={loading}>
          {issueCount}
        </StatisticsCardData>
        <StatisticsComment>{t('git.issue_count')}</StatisticsComment>
      </StatisticsCard>
      <StatisticsCard>
        <StatisticsCardData isLoading={loading}>
          <>
            <ExternalLink to={latestStarOrgUrl}>{latestStarOrg}</ExternalLink>
            <span>/</span>
            <ExternalLink to={latestStarRepoUrl}>
              {latestStarRepoName}
            </ExternalLink>
          </>
        </StatisticsCardData>
        <StatisticsComment>{t('git.latest_star')}</StatisticsComment>
      </StatisticsCard>
    </ContributionsContainer>
  );
};

Contributions.propTypes = {};

export default Contributions;
