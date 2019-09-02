import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import HeaderNavigation from './features/navigation/components/HeaderNavigation';
import Pages from './features/navigation/components/Pages';
import './App.scss';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';
import defaultTheme from './features/theme/defaultTheme';
import english from './features/translation/english.js';
import swedish from './features/translation/swedish.js';

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    resources: {
      en: {
        translation: english
      },
      sv: {
        translation: swedish
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const Background = styled.div`
  background: ${props => props.theme.dark.primary.main};
  height: 100vh;
`;

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <Background className="app">
      <HeaderNavigation />
      <Pages />
    </Background>
  </ThemeProvider>
);

export default App;
