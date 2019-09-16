import { render } from '@testing-library/react';
import React from 'react';
import AllMockProviders from '../../../testproviders/AllMockProviders';
import NotFoundPage from '../components/NotFoundPage';

describe('not found page', () => {
  it('should render with snapshot', () => {
    const pageNotFound = render(
      <AllMockProviders>
        <NotFoundPage />
      </AllMockProviders>
    );
    expect(pageNotFound).toMatchSnapshot();
  });
});
