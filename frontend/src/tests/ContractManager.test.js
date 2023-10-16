```javascript
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContractManager from '../components/ContractManager';

test('renders ContractManager', () => {
  const { getByTestId } = render(<ContractManager />);
  const contractManagerElement = getByTestId('contract-manager');
  expect(contractManagerElement).toBeInTheDocument();
});

test('manage contract', () => {
  const { getByLabelText, getByText } = render(<ContractManager />);
  
  const brandInput = getByLabelText(/Brand/i);
  fireEvent.change(brandInput, { target: { value: 'Brand A' } });
  expect(brandInput.value).toBe('Brand A');

  const contractInput = getByLabelText(/Contract/i);
  fireEvent.change(contractInput, { target: { value: 'Contract A' } });
  expect(contractInput.value).toBe('Contract A');

  const statusInput = getByLabelText(/Status/i);
  fireEvent.change(statusInput, { target: { value: 'Active' } });
  expect(statusInput.value).toBe('Active');

  const submitButton = getByText(/Submit/i);
  fireEvent.click(submitButton);

  const contractManagerElement = getByTestId('contract-manager');
  expect(contractManagerElement).toHaveTextContent('Brand A');
  expect(contractManagerElement).toHaveTextContent('Contract A');
  expect(contractManagerElement).toHaveTextContent('Active');
});
```