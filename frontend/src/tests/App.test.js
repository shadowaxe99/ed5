```javascript
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders IncomeExpenseTracker component', () => {
  render(<App />);
  const linkElement = screen.getByTestId('income-expense-tracker');
  expect(linkElement).toBeInTheDocument();
});

test('renders ContractManager component', () => {
  render(<App />);
  const linkElement = screen.getByTestId('contract-manager');
  expect(linkElement).toBeInTheDocument();
});

test('renders ContentScheduler component', () => {
  render(<App />);
  const linkElement = screen.getByTestId('content-scheduler');
  expect(linkElement).toBeInTheDocument();
});
```