import ApolloClient from 'apollo-boost';
import React from 'react';
import styled from 'styled-components';
import PageNavigation from './features/navigation/components/PageNavigation';
import Pages from './features/navigation/components/Pages';
import './App.scss';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeSelectorProvider } from './features/theme/components/ThemeSelectorProvider';
import english from './features/translation/english.js';
import swedish from './features/translation/swedish.js';

i18n
  .use(initReactI18next)
  .use(backend)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: english
      },
      sv: {
        translation: swedish
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const Background = styled.div`
  background: ${props =>
    `linear-gradient(to top, ${props.theme.primary.light}, ${props.theme.primary.main})`};
  height: 100vh;
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
