import { navigate } from '@reach/router';
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
    return <div>Are you here by mistake? I will redirect you now</div>;
  }
  const {
    access_token: token,
    state,
    expires_in: expiresIn,
    token_type: bearer
  } = parse(hash.slice(1));
  const { originalUrl } = parse(state);
  const navigateTo = originalUrl || `/${HOME_PAGE}`;
  if (AUTHORIZATION) {
    navigate(navigateTo);
    return <div>Loading</div>;
  }
  persistAuthorization({ bearer, token, expiresIn });
  navigate(navigateTo);
  return <div>Loading</div>;
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
