import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import styled from 'styled-components';
import ExternalLink from '../../navigation/components/ExternalLink';
import { GITHUB_CONTRIBUTIONS } from '../statisticsQueries';

const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;
const Contribution = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${props => props.theme.background};
  min-height: 100px;
  flex: 1;
  border-radius: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 8px;
`;
const ContributionData = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px 0;
  font-size: 28px;
  color: ${props => props.theme.secondary.main};
`;
const ContributionComment = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

// https://www.30secondsofcode.org/snippet/deepGet
const deepGet = (obj, keys) =>
  keys.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), obj);
const NO_HITS = 0;

const Contributions = () => {
  const { loading, error, data } = useQuery(GITHUB_CONTRIBUTIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const totalCommitContributions =
    deepGet(data, [
      'user',
      'contributionsCollection',
      'totalCommitContributions'
    ]) || NO_HITS;
  const issueCount = deepGet(data, ['search', 'issueCount']);
  const latestStar = deepGet(data, [
    'user',
    'starredRepositories',
    'nodes',
    '0'
  ]);
  const {
    url: latestStarRepoUrl,
    name: latestStarRepoName,
    owner
  } = latestStar;
  const { url: latestStarOrgUrl, login: latestStarOrg } = owner;

  return (
    <ContributionsContainer>
      <Contribution>
        <ContributionData>{totalCommitContributions}</ContributionData>
        <ContributionComment>Commits since last year</ContributionComment>
      </Contribution>
      <Contribution>
        <ContributionData>{issueCount}</ContributionData>
        <ContributionComment>Issues handled all time</ContributionComment>
      </Contribution>
      <Contribution>
        <ContributionData>
          <ExternalLink to={latestStarOrgUrl}>{latestStarOrg}</ExternalLink>/
          <ExternalLink to={latestStarRepoUrl}>
            {latestStarRepoName}
          </ExternalLink>
        </ContributionData>
        <ContributionComment>
          Is the latest starred repository
        </ContributionComment>
      </Contribution>
    </ContributionsContainer>
  );
};

Contributions.propTypes = {};

export default Contributions;
