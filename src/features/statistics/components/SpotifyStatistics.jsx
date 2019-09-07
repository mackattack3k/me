import React, { useContext } from 'react';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
import Button from '../../button/components/Button';
import { SpotifyAccessContext } from '../../spotify/components/SpotifyAccessProvider';
import H1 from '../../text/components/H1';
import SpotifyUser from './SpotifyUser';
import StatisticsPageContent from './StatisticsPageContent';

const SpotifyStatistics = () => {
  const { t } = useTranslation();
  const { AUTHORIZATION, authorize } = useContext(SpotifyAccessContext);
  if (!AUTHORIZATION) {
    return <Button onClick={authorize}>Login to Spotify</Button>;
  }
  const restLink = new RestLink({
    uri: 'https://api.spotify.com/v1/',
    headers: {
      Authorization: AUTHORIZATION
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
      <StatisticsPageContent>
        {t('statistics.spotify')}
        <SpotifyUser />
      </StatisticsPageContent>
    </ApolloProvider>
  );
};

export default SpotifyStatistics;
