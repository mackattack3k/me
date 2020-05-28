import React, { useContext } from 'react';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RestLink } from 'apollo-link-rest';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Button from '../../button/components/Button';
import { SpotifyAccessContext } from '../../spotify/components/SpotifyAccessProvider';
import H1 from '../../text/components/H1';
import SpotifyPlayLists from './SpotifyPlayLists';
import SpotifyUser from './SpotifyUser';
import StatisticsPageContent from './StatisticsPageContent';

const AuthorizeButton = styled.div`
  margin: 10px 0 20px;
`;

const SpotifyStatistics = () => {
  const { t } = useTranslation();
  const { AUTHORIZATION, authorize, hasExpired } = useContext(
    SpotifyAccessContext
  );
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
  const canUseData = AUTHORIZATION && !hasExpired;
  return (
    <ApolloProvider client={spotifyClient}>
      <H1>
        Spotify <FontAwesomeIcon icon={faSpotify} />
      </H1>
      <StatisticsPageContent>
        {canUseData
          ? t('statistics.spotify')
          : t('statistics.spotify_logged_out')}
        {canUseData && (
          <>
            <SpotifyUser />
            <SpotifyPlayLists />
          </>
        )}
        {!canUseData && (
          <AuthorizeButton>
            <Button onClick={authorize}>
              {t('statistics.log_in_spotify')}
            </Button>
          </AuthorizeButton>
        )}
      </StatisticsPageContent>
    </ApolloProvider>
  );
};

export default SpotifyStatistics;
