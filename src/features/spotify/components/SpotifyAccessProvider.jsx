import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../../useLocalStorage';
import { AUTHORIZE_SPOTIFY } from '../spotifyRoutes';

const SpotifyAccessContext = createContext(null);

const SpotifyAccessProvider = ({ children }) => {
  const [authorization, setAuthorization] = useLocalStorage('spotify');
  const authorize = () => {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT;
    if (!CLIENT_ID) {
      // eslint-disable-next-line no-console
      console.log('No client id, show error', { CLIENT_ID });
      return;
    }
    const { host, href, protocol } = window.location;
    const spotifyAuthUri = 'https://accounts.spotify.com/authorize';
    const redirectUri = encodeURIComponent(
      `${protocol}//${host}/${AUTHORIZE_SPOTIFY}`
    );
    const state = `originalUrl=${encodeURIComponent(href)}`;
    window.location.href = `${spotifyAuthUri}?client_id=${CLIENT_ID}&response_type=token&state=${state}&redirect_uri=${redirectUri}`;
  };
  function addMinutes(minutes) {
    return new Date(new Date().getTime() + minutes * 60000);
  }
  const persistAuthorization = ({ bearer, token, expiresIn }) => {
    const expiresAt = addMinutes(expiresIn).toISOString();
    setAuthorization({
      auth: `${bearer} ${token}`,
      expiresAt
    });
  };
  return (
    <SpotifyAccessContext.Provider
      value={{
        AUTHORIZATION: authorization,
        persistAuthorization,
        authorize
      }}
    >
      {children}
    </SpotifyAccessContext.Provider>
  );
};

SpotifyAccessProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { SpotifyAccessProvider, SpotifyAccessContext };
