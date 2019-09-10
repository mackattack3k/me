import React from 'react';
import styled from 'styled-components';
import git from '../../../images/git.png';

const GitStyle = styled.div`
  padding: 20px 10px 20px 0;
  width: 100%;
`;

const GitImage = styled.img`
  width: 100%;
  border-radius: 20px;
`;

const GitSection = () => (
  <GitStyle>
    <GitImage alt="Git screen shot" src={git} />
  </GitStyle>
);

export default GitSection;
