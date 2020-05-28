import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render, act } from '@testing-library/react';
import wait from 'waait';
import AllMockProviders from '../../../testproviders/AllMockProviders';
import SpotifyUser from '../components/SpotifyUser';
import english from '../../translation/english';
import { SPOTIFY_USER } from '../statisticsQueries';

const mountMockedProvider = async () => {
  const component = render(
    <AllMockProviders>
      <SpotifyUser />
    </AllMockProviders>
  );

  await act(() => wait(0));
  return component;
};
const errorMockProvider = async () => {
  const spotifyErrorMock = {
    request: {
      query: SPOTIFY_USER
    },
    error: new Error('aw shucks')
  };
  const component = render(
    <AllMockProviders>
      <MockedProvider mocks={[spotifyErrorMock]}>
        <SpotifyUser />
      </MockedProvider>
    </AllMockProviders>
  );
  await act(() => wait(0));
  return component;
};

describe('spotify user statistics', () => {
  it('should render with snapshot', async () => {
    const spotifyUser = await mountMockedProvider();
    expect(spotifyUser).toMatchSnapshot();
  });
  it('should show error on data failure', async () => {
    const { getByText } = await errorMockProvider();
    const errorMessage = english.error.unknown;
    const error = getByText(new RegExp(errorMessage, 'g'));
    expect(error).toBeDefined();
  });
});
