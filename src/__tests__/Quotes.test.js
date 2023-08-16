import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Quotes from '../components/Quotes';

// Mock the fetch API response
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([{ category: 'Inspirational', quote: 'Test quote' }]),
}));

test('Quotes component matches snapshot', async () => {
  const { asFragment } = render(<Quotes />);
  await waitFor(() => {
    expect(asFragment()).toMatchSnapshot();
  });
});
