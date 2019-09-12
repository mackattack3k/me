import ApolloBoostClient from 'apollo-boost';

const githubClient = new ApolloBoostClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${window.ENV.GITHUB_PERSONAL_ACCESS_TOKEN}`
  }
});

export default githubClient;
