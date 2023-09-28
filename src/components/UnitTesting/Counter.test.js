import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders Counter component', () => {
  render(<Counter />);
  const headingElement = screen.getByText(/Counter/);
  expect(headingElement).toBeInTheDocument();
});

test('initial count is 0', () => {
  render(<Counter />);
  const countElement = screen.getByText('Count: 0');
  expect(countElement).toBeInTheDocument();
});

test('increment button increases count', () => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  const countElement = screen.getByText('Count: 0');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('Count: 1');
});

test('decrement button decreases count', () => {
  render(<Counter />);
  const decrementButton = screen.getByText('Decrement');
  const countElement = screen.getByText('Count: 0');

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('Count: -1');
});
