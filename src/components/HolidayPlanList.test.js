import React from 'react';
import { render } from '@testing-library/react';
import HolidayPlanList from './HolidayPlanList';

describe('HolidayPlanList', () => {
  const plans = [
    {
      id: 1,
      title: 'Plan 1',
      description: 'Description 1',
      date: '2024-03-15',
      location: 'Location 1',
      participants: ['Participant 1, Participant 2']
    },
    {
      id: 2,
      title: 'Plan 2',
      description: 'Description 2',
      date: '2024-03-16',
      location: 'Location 2',
      participants: ['Participant 3, Participant 4']
    }
  ];

  it('should render HolidayPlanList correctly', () => {
    const { getByText } = render(<HolidayPlanList plans={plans} />);

    expect(getByText('Plan 1')).toBeInTheDocument();
    expect(getByText('Description 1')).toBeInTheDocument();
    expect(getByText('2024-03-15')).toBeInTheDocument();
    expect(getByText('Location 1')).toBeInTheDocument();
    expect(getByText('Participant 1, Participant 2')).toBeInTheDocument();

    expect(getByText('Plan 2')).toBeInTheDocument();
    expect(getByText('Description 2')).toBeInTheDocument();
    expect(getByText('2024-03-16')).toBeInTheDocument();
    expect(getByText('Location 2')).toBeInTheDocument();
    expect(getByText('Participant 3, Participant 4')).toBeInTheDocument();
  });

  it('should return null if plans is not an array', () => {
    const { container } = render(<HolidayPlanList plans={null} />);
    expect(container.firstChild).toBeNull();
  });
});
