import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

import Header from '../components/Header';

test('Header component matches snapshot', () => {
  const { asFragment } = render(
    // Wrap your component with MemoryRouter
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
