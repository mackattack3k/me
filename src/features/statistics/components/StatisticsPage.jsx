import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import H1 from '../../text/components/H1';
import Contributions from './Contributions';

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const GitHelp = styled.div`
  margin: 0 8px;
`;

const StatisticsPage = () => (
  <Statistics>
    <H1>
      Github <FontAwesomeIcon icon={faGithub} />
    </H1>
    <GitHelp>
      Ever wonder what Marcus has been doing on github? Here is a compact view
      of the most important stuff
    </GitHelp>
    <Contributions />
  </Statistics>
);

export default StatisticsPage;
