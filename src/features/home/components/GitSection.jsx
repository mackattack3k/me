import React from 'react';
import styled from 'styled-components';
import git from '../../../images/git.png';
import gitWeb from '../../../images/git.webp';

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
    <picture>
      <source srcSet={gitWeb} type="image/webp" />
      <source srcSet={git} type="image/jpeg" />
      <GitImage alt="Git screen shot" src={git} />
    </picture>
  </GitStyle>
);

export default GitSection;
