import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from './LoadingSpinner';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingPage = () => (
  <Page>
    <LoadingSpinner />
  </Page>
);

export default LoadingPage;
