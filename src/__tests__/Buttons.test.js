import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../components/Buttons';

test('Buttons component matches snapshot', () => {
  const { asFragment } = render(<Buttons />);
  expect(asFragment()).toMatchSnapshot();
});

test('Clicking a button updates the snapshot', () => {
  const { getByText, asFragment } = render(<Buttons />);

  // Simulate clicking a button
  fireEvent.click(getByText('7'));

  // Verify the updated component output
  expect(asFragment()).toMatchSnapshot();
});
