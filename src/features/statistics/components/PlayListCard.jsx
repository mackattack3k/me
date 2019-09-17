import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import StatisticsCard from './StatisticsCard';
import StatisticsCardData from './StatisticsCardData';
import StatisticsComment from './StatisticsComment';

const PlayListComment = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin: 4px 0;
  }
`;

const PlayListCard = ({ playlist }) => {
  const { t } = useTranslation();
  const { name, tracks, owner } = playlist;
  const { display_name: author } = owner;
  return (
    <StatisticsCard>
      <StatisticsCardData>{name}</StatisticsCardData>
      <StatisticsComment>
        <PlayListComment>
          <div>{`${tracks.total} ${t('spotify_playlist.tracks')}`}</div>
          <div>{author}</div>
        </PlayListComment>
      </StatisticsComment>
    </StatisticsCard>
  );
};

PlayListCard.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tracks: PropTypes.shape({
      total: PropTypes.number.isRequired
    }).isRequired,
    owner: PropTypes.shape({
      display_name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default PlayListCard;
