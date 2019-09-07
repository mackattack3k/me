import React from 'react';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import H1 from '../../text/components/H1';
import SpotifyUser from './SpotifyUser';

const SpotifyStatistics = () => {
  const restLink = new RestLink({
    uri: 'https://api.spotify.com/v1/',
    headers: {
      Authorization: `${process.env.REACT_APP_SPOTIFY_CLIENT_TOKEN}`
    }
  });
  const spotifyClient = new ApolloClient({
    link: restLink,
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={spotifyClient}>
      <H1>
        Spotify <FontAwesomeIcon icon={faSpotify} />
      </H1>
      <SpotifyUser />
    </ApolloProvider>
  );
};

export default SpotifyStatistics;
