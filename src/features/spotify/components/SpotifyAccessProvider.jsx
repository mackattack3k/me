import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { ToastContext } from '../../toast/components/ToastProvider';
import useLocalStorage from '../../useLocalStorage';
import { AUTHORIZE_SPOTIFY } from '../spotifyRoutes';

const SpotifyAccessContext = createContext(null);

const SpotifyAccessProvider = ({ children }) => {
  const [authorization, setAuthorization] = useLocalStorage('spotify');
  const { addToast } = useContext(ToastContext);
  const authorize = () => {
    const { SPOTIFY_CLIENT_ID: CLIENT_ID } = window.ENV;
    if (!CLIENT_ID) {
      addToast('error.asdasd');
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
  const persistAuthorization = ({ bearer, token, expiresIn }) => {
    const expiresAt = new Date(new Date().getTime() + 1000 * expiresIn);
    setAuthorization({
      access: `${bearer} ${token}`,
      expiresAt
    });
  };
  const hasExpired = () => {
    const { expiresAt } = authorization || {};
    const now = new Date();
    const diff = now - new Date(expiresAt);
    return diff > 0;
  };
  const { access: AUTHORIZATION } = authorization || {};
  return (
    <SpotifyAccessContext.Provider
      value={{
        AUTHORIZATION,
        persistAuthorization,
        authorize,
        hasExpired: hasExpired()
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
