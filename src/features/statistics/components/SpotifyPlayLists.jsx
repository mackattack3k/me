import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ErrorPage from '../../error/components/ErrorPage';
import LoadingSpinner from '../../loading/components/LoadingSpinner';
import H3 from '../../text/components/H3';
import { SPOTIFY_USER_PLAYLISTS } from '../statisticsQueries';
import StatisticsCard from './StatisticsCard';

const PlayLists = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SpotifyPlayLists = () => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(SPOTIFY_USER_PLAYLISTS);
  if (error) {
    return <ErrorPage />;
  }
  const { playlist: playlists = {} } = data || {};
  const { items = [] } = playlists;
  return (
    <div>
      <H3>{t('spotify_playlist.title')}</H3>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <PlayLists>
          {items.map(playlist => (
            <StatisticsCard key={playlist.id}>{playlist.name}</StatisticsCard>
          ))}
        </PlayLists>
      )}
    </div>
  );
};

SpotifyPlayLists.propTypes = {};

export default SpotifyPlayLists;
