import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContentScheduler from '../components/ContentScheduler';

test('renders ContentScheduler', () => {
  const { getByTestId } = render(<ContentScheduler />);
  const contentSchedulerElement = getByTestId('content-scheduler');
  expect(contentSchedulerElement).toBeInTheDocument();
});

test('schedule content', () => {
  const { getByLabelText, getByText } = render(<ContentScheduler />);
  
  const contentInput = getByLabelText('Content:');
  const dateInput = getByLabelText('Date:');
  const timeInput = getByLabelText('Time:');
  
  fireEvent.change(contentInput, { target: { value: 'Test content' } });
  fireEvent.change(dateInput, { target: { value: '2022-12-31' } });
  fireEvent.change(timeInput, { target: { value: '12:00' } });
  
  const scheduleButton = getByText('Schedule');
  fireEvent.click(scheduleButton);
  
  const scheduledContent = getByText('Test content');
  const scheduledDate = getByText('2022-12-31');
  const scheduledTime = getByText('12:00');
  
  expect(scheduledContent).toBeInTheDocument();
  expect(scheduledDate).toBeInTheDocument();
  expect(scheduledTime).toBeInTheDocument();
});