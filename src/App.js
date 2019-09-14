import React from 'react';
import styled from 'styled-components';
import './App.css';
import { setupLanguage } from './features/language/initLanguage';
import Pages from './features/navigation/components/Pages';
import NavigationBar from './features/navigation/components/NavigationBar';
import { SpotifyAccessProvider } from './features/spotify/components/SpotifyAccessProvider';
import { ThemeSelectorProvider } from './features/theme/components/ThemeSelectorProvider';
import { ToastProvider } from './features/toast/components/ToastProvider';

setupLanguage();

const Background = styled.div`
  background: ${props =>
    `linear-gradient(to top, ${props.theme.primary.light}, ${props.theme.primary.main})`};
  height: 100%;
`;

const App = () => {
  return (
    <ThemeSelectorProvider>
      <ToastProvider>
        <SpotifyAccessProvider>
          <Background className="app">
            <NavigationBar />
            <Pages />
          </Background>
        </SpotifyAccessProvider>
      </ToastProvider>
    </ThemeSelectorProvider>
  );
};

export default App;
