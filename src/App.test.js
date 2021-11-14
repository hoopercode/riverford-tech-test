import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Form from "./components/Form/Form"
import App from './App';

test('renders show button to the page', () => {
  render(<App />)
  const button = screen.getByRole("button");

  expect(button).toHaveTextContent(/show/i);
})

test('renders show button to the page', () => {
  render(<App />)
  const form = screen.getByRole("form");

  expect(form).toHaveTextContent(/name/i);
})


