import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';
import { renderWithProviders } from 'utils/testing';

describe('Home Component', () => {
  it.skip('Home should be in h1', () => {
    const { getByText } = renderWithProviders(<Home />);
    expect(getByText('Home')).toMatchInlineSnapshot(`
      <h1>
        Home Screen:
      </h1>
    `);
  });
});
