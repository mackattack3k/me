import React from 'react';
import styled from 'styled-components';
import H1 from '../../text/components/H1';
import Contributions from './Contributions';

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StatisticsPage = () => (
  <Statistics>
    <H1>Github</H1>
    <div>
      Ever wonder what Marcus has been doing on github? Here is a compact view
      of the most important stuff
    </div>
    <Contributions />
  </Statistics>
);

export default StatisticsPage;
