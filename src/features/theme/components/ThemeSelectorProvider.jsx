import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../defaultTheme';
import { createContext } from 'react';
import useTheme from '../useTheme';

const ThemeSelectorContext = createContext(null);

const ThemeSelectorProvider = ({ children }) => {
  const [isInDarkMode, setDarkMode] = useTheme();
  return (
    <ThemeSelectorContext.Provider
      value={{
        isInDarkMode,
        setDarkMode
      }}
    >
      <ThemeProvider
        theme={isInDarkMode ? defaultTheme.dark : defaultTheme.light}
      >
        {children}
      </ThemeProvider>
    </ThemeSelectorContext.Provider>
  );
};

export { ThemeSelectorProvider, ThemeSelectorContext };
