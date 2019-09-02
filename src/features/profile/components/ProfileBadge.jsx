import React from 'react';
import profileImage from '../../../images/Marcus.jpg';
import styled from 'styled-components';

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

const ProfileBadge = () => (
  <Badge>
    <Img src={profileImage} alt="Profile Marcus" />
    mackattack3k
  </Badge>
);

export default ProfileBadge;
