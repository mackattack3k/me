import { gql } from 'apollo-boost';

export const GITHUB_CONTRIBUTIONS = gql`
  {
    user(login: "mackattack3k") {
      login
      contributionsCollection {
        totalCommitContributions
        commitContributionsByRepository {
          repository {
            name
          }
        }
      }
      starredRepositories(
        first: 1
        orderBy: { direction: DESC, field: STARRED_AT }
      ) {
        nodes {
          description
          name
          owner {
            login
            url
          }
          url
        }
      }
    }
    search(type: ISSUE, first: 10, query: "author:mackattack3k") {
      issueCount
    }
  }
`;
