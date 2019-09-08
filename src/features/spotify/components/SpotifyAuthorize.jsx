import { Redirect, navigate } from '@reach/router';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'qs';
import { HOME_PAGE } from '../../home/homeRoutes';
import { SpotifyAccessContext } from './SpotifyAccessProvider';

const SpotifyAuthorize = ({ location }) => {
  const { hash } = location;
  const { persistAuthorization, AUTHORIZATION } = useContext(
    SpotifyAccessContext
  );
  if (!hash) {
    return <Redirect to={HOME_PAGE} noThrow />;
  }
  const {
    access_token: token,
    state,
    expires_in: expiresIn,
    token_type: bearer
  } = parse(hash.slice(1));
  const { originalUrl } = parse(state);
  if (!AUTHORIZATION) {
    persistAuthorization({ bearer, token, expiresIn });
  }
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
