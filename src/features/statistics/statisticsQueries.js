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

export const SPOTIFY_USER = gql`
  {
    user @rest(type: "user", path: "users/cocoix") {
      href
      display_name
      id
      images
      external_urls @type(name: "external_urls") {
        spotify
      }
      followers @type(name: "followers") {
        total
      }
    }
  }
`;

export const SPOTIFY_USER_PLAYLISTS = gql`
  {
    playlist @rest(type: "user", path: "users/cocoix/playlists") {
      total
    }
  }
`;
