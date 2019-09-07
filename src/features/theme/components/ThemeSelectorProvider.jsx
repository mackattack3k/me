import React, { createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import defaultTheme from '../defaultTheme';
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

ThemeSelectorProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ThemeSelectorProvider, ThemeSelectorContext };
