import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import ExternalLink from '../../navigation/components/ExternalLink';
import H1 from '../../text/components/H1';
import { GITHUB_CONTRIBUTIONS } from '../statisticsQueries';

const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const Contribution = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${props => props.theme.background};
  margin: 20px 0;
  :nth-child(n + 2) {
    margin: 20px 0 20px 10px;
  }
`;
const ContributionData = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  color: ${props => props.theme.secondary.main};
`;
const ContributionComment = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
`;
const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Contributions = () => {
  const { loading, error, data } = useQuery(GITHUB_CONTRIBUTIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log({ data });
  return (
    <ContributionsContainer>
      <Contribution>
        <ContributionData>
          {data.user.contributionsCollection.totalCommitContributions}
        </ContributionData>
        <ContributionComment>Commits since last year</ContributionComment>
      </Contribution>
      <Contribution>
        <ContributionData>{data.search.issueCount}</ContributionData>
        <ContributionComment>Issues handled all time</ContributionComment>
      </Contribution>
      <Contribution>
        <ContributionData>
          <ExternalLink to={data.user.starredRepositories.nodes[0].owner.url}>
            {data.user.starredRepositories.nodes[0].owner.login}
          </ExternalLink>
          /
          <ExternalLink to={data.user.starredRepositories.nodes[0].url}>
            {data.user.starredRepositories.nodes[0].name}
          </ExternalLink>
        </ContributionData>
        <ContributionComment>
          Is the latest starred repository
        </ContributionComment>
      </Contribution>
    </ContributionsContainer>
  );
};

const StatisticsPage = () => (
  <Statistics>
    <H1>Github</H1>
    <div>
      Ever wonder what Marcus has been doing on github? Here is a compact view
      of the most important stuff
    </div>
    <Contributions />
  </Statistics>
);

export default StatisticsPage;
