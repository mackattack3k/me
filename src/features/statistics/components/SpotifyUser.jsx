import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { SPOTIFY_USER } from '../statisticsQueries';

const SpotifyUser = () => {
  const { loading, error, data } = useQuery(SPOTIFY_USER);
  // eslint-disable-next-line no-console
  console.log({ loading, error, data });
  return <div />;
};

export default SpotifyUser;
