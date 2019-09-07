import ApolloClient from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';
import './App.scss';
import { ApolloProvider } from '@apollo/react-hooks';
import { setupLanguage } from './features/language/initLanguage';
import Pages from './features/navigation/components/Pages';
import PageNavigation from './features/navigation/components/PageNavigation';
import { ThemeSelectorProvider } from './features/theme/components/ThemeSelectorProvider';

setupLanguage();

const Background = styled.div`
  background: ${props =>
    `linear-gradient(to top, ${props.theme.primary.light}, ${props.theme.primary.main})`};
  height: 100%;
`;

const App = () => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
    }
  });
  return (
    <ThemeSelectorProvider>
      <ApolloProvider client={client}>
        <Background className="app">
          <PageNavigation />
          <Pages />
        </Background>
      </ApolloProvider>
    </ThemeSelectorProvider>
  );
};

export default App;
