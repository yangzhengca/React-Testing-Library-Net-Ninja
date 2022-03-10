import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingEl = screen.getByText(/my header/i);
  expect(headingEl).toBeInTheDocument();
});


test('should render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingEl = screen.getByRole("heading");
    expect(headingEl).toBeInTheDocument();
  });

