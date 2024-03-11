import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import HolidayPlanForm from './HolidayPlanForm';

describe('HolidayPlanForm', () => {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();
  const initialValues = {
    title: 'Initial Title',
    description: 'Initial Description',
    date: '2024-12-31',
    location: 'Initial Location',
    participants: 'Participant 1, Participant 2'
  };

  it('should render holiday plan form correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <HolidayPlanForm onSubmit={onSubmit} onCancel={onCancel} initialValues={initialValues} />
    );

    expect(getByPlaceholderText('Title')).toHaveValue('Initial Title');
    expect(getByPlaceholderText('Description')).toHaveValue('Initial Description');
    expect(getByPlaceholderText('Location')).toHaveValue('Initial Location');
    expect(getByPlaceholderText('Participants')).toHaveValue('Participant 1, Participant 2');
    expect(getByText('Save')).toBeInTheDocument();
    expect(getByText('Cancel')).toBeInTheDocument();
  });

  it('should call onSubmit with form data when submitted', async () => {
    const { getByText, getByPlaceholderText } = render(
      <HolidayPlanForm onSubmit={onSubmit} onCancel={onCancel} initialValues={initialValues} />
    );

    fireEvent.change(getByPlaceholderText('Title'), { target: { value: 'Updated Title' } });
    fireEvent.change(getByPlaceholderText('Description'), { target: { value: 'Updated Description' } });
    fireEvent.change(getByPlaceholderText('Location'), { target: { value: 'Updated Location' } });

    fireEvent.click(getByText('Save'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        title: 'Updated Title',
        description: 'Updated Description',
        location: 'Updated Location',
        date: '2024-12-31',
        participants: 'Participant 1, Participant 2'
      });
    });
  });

  it('should call onCancel when cancel button is clicked', () => {
    const { getByText } = render(
      <HolidayPlanForm onSubmit={onSubmit} onCancel={onCancel} initialValues={initialValues} />
    );

    fireEvent.click(getByText('Cancel'));

    expect(onCancel).toHaveBeenCalled();
  });
});
