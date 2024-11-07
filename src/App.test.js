import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Distance Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/Distance Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
