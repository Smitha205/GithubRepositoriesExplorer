import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const appElement = screen.getByTestId("app-testid");
  expect(appElement).toBeInTheDocument();
});
