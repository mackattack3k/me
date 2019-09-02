import React from 'react';
import styled from 'styled-components';
import HeaderNavigation from './features/navigation/components/HeaderNavigation';
import Pages from './features/navigation/components/Pages';
import './App.scss';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';
import { ThemeSelectorProvider } from './features/theme/components/ThemeSelectorProvider';
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
  background: ${props => props.theme.primary.main};
  height: 100vh;
`;

const App = () => {
  return (
    <ThemeSelectorProvider>
      <Background className="app">
        <HeaderNavigation />
        <Pages />
      </Background>
    </ThemeSelectorProvider>
  );
};

export default App;
