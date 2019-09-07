import { useQuery } from '@apollo/react-hooks';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import deepGet from '../../deepGet';
import ExternalLink from '../../navigation/components/ExternalLink';
import { SPOTIFY_USER } from '../statisticsQueries';
import StatisticsCard from './StatisticsCard';
import StatisticsCardData from './StatisticsCardData';
import StatisticsComment from './StatisticsComment';

const SpotifyUserCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100%;
  border-radius: 20px;
`;

const SpotifyLink = styled.div`
  margin-top: 5px;
`;

const SpotifyLinkText = styled.span`
  padding-right: 5px;
`;

const SpotifyUser = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(SPOTIFY_USER);
  // eslint-disable-next-line no-console
  console.log({ loading, error, data });
  if (error) {
    return <>Spotify error :(</>;
  }
  const { display_name: name, external_urls: urls, followers, id } =
    deepGet(data, ['user']) || {};
  const { total: amountOfFollowers = 0 } = followers || {};
  const { spotify: profileUrl } = urls || {};
  const profileImage = deepGet(data, ['user', 'images', '0', 'url']);
  return (
    <SpotifyUserCards>
      <StatisticsCard>
        <StatisticsCardData isLoading={loading}>
          <ProfileImage src={profileImage} alt="Spotify profile avatar" />
        </StatisticsCardData>
        <StatisticsComment>{`${name} (${id})`}</StatisticsComment>
        <SpotifyLink>
          <ExternalLink to={profileUrl}>
            <SpotifyLinkText>{t('spotify_user.go_to_profile')}</SpotifyLinkText>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </ExternalLink>
        </SpotifyLink>
      </StatisticsCard>
      <StatisticsCard>
        <StatisticsCardData isLoading={loading}>
          {amountOfFollowers}
        </StatisticsCardData>
        <StatisticsComment>{t('spotify_user.followers')}</StatisticsComment>
      </StatisticsCard>
    </SpotifyUserCards>
  );
};

export default SpotifyUser;
