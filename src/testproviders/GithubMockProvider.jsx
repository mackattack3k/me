import { importSchema } from 'graphql-import';
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import PropTypes from 'prop-types';

const GithubMockProvider = ({ children, mockResolvers }) => {
  const typeDefs = importSchema('./github-api-v4/schema.public.graphql');
  const schema = makeExecutableSchema({
    typeDefs,
    resolverValidationOptions: {
      requireResolversForResolveType: false
    }
  });

  const defaultMocks = {
    URI: () => 'http://test.com',
    Int: () => 5
  };

  addMockFunctionsToSchema({
    schema,
    mocks: { ...defaultMocks, ...mockResolvers }
  });

  const client = new ApolloClient({
    link: new SchemaLink({ schema }),
    cache: new InMemoryCache()
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

GithubMockProvider.propTypes = {
  children: PropTypes.node.isRequired,
  mockResolvers: PropTypes.shape({})
};
GithubMockProvider.defaultProps = {
  mockResolvers: {}
};

export default GithubMockProvider;
