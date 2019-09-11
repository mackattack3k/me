import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './features/theme/defaultTheme';
import GithubMockProvider from './testproviders/GithubMockProvider';

const AllMockProviders = ({ children }) => (
  <ThemeProvider theme={defaultTheme.dark}>
    <GithubMockProvider>{children}</GithubMockProvider>
  </ThemeProvider>
);

AllMockProviders.propTypes = {
  children: PropTypes.node.isRequired
};

export default AllMockProviders;
