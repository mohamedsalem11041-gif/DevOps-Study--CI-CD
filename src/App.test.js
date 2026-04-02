import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mohamed Salem heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Mohamed Salem/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders GitHub button', () => {
  render(<App />);
  const githubLink = screen.getByText(/GitHub/i);
  expect(githubLink).toBeInTheDocument();
});
