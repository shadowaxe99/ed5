```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IncomeExpenseTracker from '../components/IncomeExpenseTracker';

test('renders IncomeExpenseTracker', () => {
  const { getByTestId } = render(<IncomeExpenseTracker />);
  const trackerElement = getByTestId('income-expense-tracker');
  expect(trackerElement).toBeInTheDocument();
});

test('handles income and expense input', () => {
  const { getByLabelText, getByText } = render(<IncomeExpenseTracker />);
  
  const incomeInput = getByLabelText('Income');
  const expenseInput = getByLabelText('Expense');
  const submitButton = getByText('Submit');

  fireEvent.change(incomeInput, { target: { value: '5000' } });
  fireEvent.change(expenseInput, { target: { value: '2000' } });
  fireEvent.click(submitButton);

  expect(incomeInput.value).toBe('5000');
  expect(expenseInput.value).toBe('2000');
});

test('displays income and expense data', () => {
  const { getByTestId } = render(<IncomeExpenseTracker />);
  
  const incomeDisplay = getByTestId('income-display');
  const expenseDisplay = getByTestId('expense-display');

  expect(incomeDisplay).toHaveTextContent('5000');
  expect(expenseDisplay).toHaveTextContent('2000');
});
```