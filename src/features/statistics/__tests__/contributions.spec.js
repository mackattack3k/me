import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { render, act } from '@testing-library/react';
import wait from 'waait';
import AllMockProviders from '../../../testproviders/AllMockProviders';
import english from '../../translation/english';
import Contributions from '../components/Contributions';
import {
  GITHUB_CONTRIBUTIONS,
  SPOTIFY_USER_PLAYLISTS
} from '../statisticsQueries';

const mountMockedProvider = async () => {
  const githubPartialMock = {
    request: {
      query: GITHUB_CONTRIBUTIONS
    },
    result: {
      user: null,
      search: {
        issueCount: 12
      }
    }
  };
  const component = render(
    <AllMockProviders>
      <MockedProvider mocks={[githubPartialMock]}>
        <Contributions />
      </MockedProvider>
    </AllMockProviders>
  );

  await act(() => wait(0));
  return component;
};
const errorMockProvider = async () => {
  const githubErrorMock = {
    request: {
      query: GITHUB_CONTRIBUTIONS
    },
    error: new Error('aw shucks')
  };
  const component = render(
    <AllMockProviders>
      <MockedProvider mocks={[githubErrorMock]}>
        <Contributions />
      </MockedProvider>
    </AllMockProviders>
  );
  await act(() => wait(0));
  return component;
};

describe('contributions', () => {
  it('should render with snapshot', async () => {
    const contributions = await mountMockedProvider();
    expect(contributions).toMatchSnapshot();
  });
  it('should show number of commits', async () => {
    const { getByText } = await mountMockedProvider();
    const commits = getByText(/Commits/g);
    expect(commits).toBeDefined();
  });
  it('should show error on data failure', async () => {
    const { getByText } = await errorMockProvider();
    const errorMessage = english.error.unknown;
    const error = getByText(new RegExp(errorMessage, 'g'));
    expect(error).toBeDefined();
  });
});
