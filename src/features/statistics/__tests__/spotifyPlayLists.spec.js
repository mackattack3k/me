import { MockedProvider } from '@apollo/react-testing';
import { act, render } from '@testing-library/react';
import React from 'react';
import wait from 'waait';
import AllMockProviders from '../../../testproviders/AllMockProviders';
import english from '../../translation/english';
import SpotifyPlayLists from '../components/SpotifyPlayLists';

const mountMockedProvider = async () => {
  const component = render(
    <AllMockProviders>
      <SpotifyPlayLists />
    </AllMockProviders>
  );

  await act(() => wait(0));
  return component;
};
const errorMockProvider = async () => {
  const component = render(
    <AllMockProviders>
      <MockedProvider mocks={undefined}>
        <SpotifyPlayLists />
      </MockedProvider>
    </AllMockProviders>
  );
  await act(() => wait(0));
  return component;
};

describe('spotify users playlists', () => {
  it('should render with snapshot', async () => {
    const spotifyPlaylists = await mountMockedProvider();
    expect(spotifyPlaylists).toMatchSnapshot();
  });
  it('should show error on data failure', async () => {
    const { getByText } = await errorMockProvider();
    const errorMessage = english.error.unknown;
    const error = getByText(new RegExp(errorMessage, 'g'));
    expect(error).toBeDefined();
  });
});
