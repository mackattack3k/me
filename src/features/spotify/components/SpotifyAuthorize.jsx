import { Redirect, navigate } from '@reach/router';
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'qs';
import { HOME_PAGE } from '../../home/homeRoutes';
import LoadingPage from '../../loading/components/LoadingPage';
import { SpotifyAccessContext } from './SpotifyAccessProvider';

const SpotifyAuthorize = ({ location }) => {
  const [isSavingToken, setIsSaving] = useState(true);
  const { hash } = location;
  const { persistAuthorization, AUTHORIZATION, hasExpired } = useContext(
    SpotifyAccessContext
  );
  const {
    access_token: token,
    state,
    expires_in: expiresIn,
    token_type: bearer
  } = parse(hash.slice(1));
  const formattedToken = { bearer, token, expiresIn };
  // Set authenticated token or show loading
  useEffect(() => {
    if (!AUTHORIZATION || hasExpired) {
      persistAuthorization(formattedToken);
    } else {
      setIsSaving(false);
    }
  }, [
    AUTHORIZATION,
    persistAuthorization,
    setIsSaving,
    formattedToken,
    hasExpired
  ]);
  if (!hash) {
    return <Redirect to={HOME_PAGE} noThrow />;
  }
  // Wait for token to be saved in local storage before navigating away
  if (isSavingToken) {
    return <LoadingPage />;
  }
  // We are now authenticated with spotify
  // Try to navigate to old url or go home
  const { originalUrl } = parse(state);
  if (originalUrl) {
    navigate(originalUrl);
    return <></>;
  }
  return <Redirect to={HOME_PAGE} noThrow />;
};

SpotifyAuthorize.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired
  })
};
SpotifyAuthorize.defaultProps = {
  location: undefined
};

export default SpotifyAuthorize;
