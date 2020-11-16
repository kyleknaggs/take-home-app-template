import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders h1 element', () => {
  render(<App />);
  const h1 = screen.getByText('Template app for take home assignments');
  expect(h1).toHaveTextContent('Template app for take home assignments');
});
