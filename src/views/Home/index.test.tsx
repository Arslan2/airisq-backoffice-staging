import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';

describe('Home Component', () => {
  it('Home should be in h1', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Home')).toMatchInlineSnapshot(`
      <h1>
        Home Screen:
      </h1>
    `);
  });
});
