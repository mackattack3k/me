import React from 'react';
import styled from 'styled-components';
import './App.css';
import { setupLanguage } from './features/language/initLanguage';
import Pages from './features/navigation/components/Pages';
import PageNavigation from './features/navigation/components/PageNavigation';
import { SpotifyAccessProvider } from './features/spotify/components/SpotifyAccessProvider';
import { ThemeSelectorProvider } from './features/theme/components/ThemeSelectorProvider';

setupLanguage();

const Background = styled.div`
  background: ${props =>
    `linear-gradient(to top, ${props.theme.primary.light}, ${props.theme.primary.main})`};
  height: 100%;
`;

const App = () => {
  return (
    <ThemeSelectorProvider>
      <SpotifyAccessProvider>
        <Background className="app">
          <PageNavigation />
          <Pages />
        </Background>
      </SpotifyAccessProvider>
    </ThemeSelectorProvider>
  );
};

export default App;
