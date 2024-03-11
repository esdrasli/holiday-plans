jest.mock('@react-pdf/renderer', () => ({
  PDFViewer: () => null, // Mock PDFViewer component
  Document: () => null, // Mock Document component
  Page: () => null, // Mock Page component
  Text: () => null, // Mock Text component
  View: () => null, // Mock View component
  StyleSheet: { create: () => ({}) }, // Mock StyleSheet.create method
}));

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import HolidayPlanCard from './HolidayPlanCard';

describe('HolidayPlanCard', () => {
  const mockPlan = {
    id: 1,
    title: 'Plan 1',
    description: 'Description 1',
    date: '2024-03-15',
    location: 'Location 1',
    participants: ['Participant 1, Participant 2']
  };

  const mockEditHandler = jest.fn();
  const mockDeleteHandler = jest.fn();
  const mockGeneratePDFHandler = jest.fn();

  it('should render HolidayPlanCard correctly', () => {
    const { getByText } = render(
      <HolidayPlanCard
        plan={mockPlan}
        onEdit={mockEditHandler}
        onDelete={mockDeleteHandler}
        onGeneratePDF={mockGeneratePDFHandler}
      />
    );

    expect(getByText('Plan 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('Delete')).toBeInTheDocument();
    expect(getByText('PDF Generate')).toBeInTheDocument();
  });

  it('should call edit handler when edit button is clicked', () => {
    const { getByText } = render(
      <HolidayPlanCard
        plan={mockPlan}
        onEdit={mockEditHandler}
        onDelete={mockDeleteHandler}
        onGeneratePDF={mockGeneratePDFHandler}
      />
    );

    fireEvent.click(getByText('Edit'));
    expect(mockEditHandler).toHaveBeenCalledWith(mockPlan);
  });

  it('should call delete handler when delete button is clicked', () => {
    const { getByText } = render(
      <HolidayPlanCard
        plan={mockPlan}
        onEdit={mockEditHandler}
        onDelete={mockDeleteHandler}
        onGeneratePDF={mockGeneratePDFHandler}
      />
    );

    fireEvent.click(getByText('Delete'));
    expect(mockDeleteHandler).toHaveBeenCalledWith(mockPlan.id);
  });

  it('should call generate PDF handler when PDF generate button is clicked', () => {
    const { getByText } = render(
      <HolidayPlanCard
        plan={mockPlan}
        onEdit={mockEditHandler}
        onDelete={mockDeleteHandler}
        onGeneratePDF={mockGeneratePDFHandler}
      />
    );

    fireEvent.click(getByText('PDF Generate'));
    expect(mockGeneratePDFHandler).toHaveBeenCalled();
  });
});
