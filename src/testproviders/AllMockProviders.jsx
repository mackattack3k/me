import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../features/theme/defaultTheme';
import { ToastProvider } from '../features/toast/components/ToastProvider';
import GithubMockProvider from './GithubMockProvider';

const AllMockProviders = ({ children }) => (
  <ThemeProvider theme={defaultTheme.dark}>
    <ToastProvider>
      <GithubMockProvider>{children}</GithubMockProvider>
    </ToastProvider>
  </ThemeProvider>
);

AllMockProviders.propTypes = {
  children: PropTypes.node.isRequired
};

export default AllMockProviders;
