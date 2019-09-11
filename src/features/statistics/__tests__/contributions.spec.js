import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import { render, act } from '@testing-library/react';
import wait from 'waait';
import AllMockProviders from '../../../AllMockProviders';
import Contributions from '../components/Contributions';

const mountMockedProvider = async () => {
  const component = render(
    <AllMockProviders>
      <Contributions />
    </AllMockProviders>
  );

  await act(() => wait(0));
  return component;
};
const errorMockProvider = async () => {
  const component = render(
    <AllMockProviders>
      <MockedProvider mocks={undefined}>
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
  it('should number of commits', async () => {
    const { getByText } = await mountMockedProvider();
    const commits = getByText(/Commits/g);
    expect(commits).toBeDefined();
  });
  it('should show error on data failure', async () => {
    const { getByText } = await errorMockProvider();
    const error = getByText(/Error/g);
    expect(error).toBeDefined();
  });
});
