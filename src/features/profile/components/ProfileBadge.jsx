import React from 'react';
import styled from 'styled-components';
import profileImage from '../../../images/Marcus.jpg';
import profileImageWeb from '../../../images/Axakon_Marcus.webp';

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  object-fit: cover;
  object-position: 0 15%;
`;

const ProfileText = styled.div`
  margin: 5px 0;
  font-size: 12px;
  letter-spacing: 1.3px;
  color: ${props => props.theme.background};
  @media (max-width: 900px) {
    display: none;
  }
`;

const ProfileBadge = () => (
  <Badge>
    <picture>
      <source srcSet={profileImageWeb} type="image/webp" />
      <source srcSet={profileImage} type="image/jpeg" />
      <Img src={profileImage} alt="Profile Marcus" />
    </picture>
    <ProfileText>mackattack3k</ProfileText>
  </Badge>
);

export default ProfileBadge;
