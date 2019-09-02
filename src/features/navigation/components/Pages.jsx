import { Router } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import ContactPage from '../../contact/components/ContactPage';
import { CONTACT_PAGE } from '../../contact/contactRoutes';
import HomePage from '../../home/components/HomePage';
import { HOME_PAGE } from '../../home/homeRoutes';
import StatisticsPage from '../../statistics/components/StatisticsPage';
import { STATISTICS_PAGE } from '../../statistics/statisticsRoutes';
import SelectThemePage from '../../theme/components/SelectThemePage';
import { THEME_PAGE } from '../../theme/themeRoutes';

const Page = styled.div`
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary.text};
  flex: 1;
  padding: 40px;
  overflow-y: scroll;
`;

const Pages = () => (
  <Page>
    <Router>
      <HomePage path={HOME_PAGE} />
      <StatisticsPage path={STATISTICS_PAGE} />
      <ContactPage path={CONTACT_PAGE} />
      <SelectThemePage path={THEME_PAGE} />
    </Router>
  </Page>
);

export default Pages;
