import { Router } from '@reach/router';
import React from 'react';
import styled from 'styled-components';
import HomePage from '../../home/components/HomePage';

const Page = styled.div`
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  display: flex;
  background: #fff;
  flex: 1;
  padding: 40px;
  overflow-y: scroll;
`;

const Pages = () => (
  <Page>
    <Router>
      <HomePage path="/" />
    </Router>
  </Page>
);

export default Pages;
