import React from 'react';
import { render, screen } from '@testing-library/react';
import Board from './Board';

test('renders the list of itineraries', () => {
  render(<Board />);
  const linkElement = screen.getAllByTestId(/itinerary-card/i);
  expect(linkElement.length).toEqual(2);
});
 