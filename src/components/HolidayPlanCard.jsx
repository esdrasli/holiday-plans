import React from 'react';
import styled from 'styled-components';
import HolidayPlanList from './HolidayPlanList';

const CardContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: ${({ edit }) => (edit ? '#ffc107' : '#dc3545')};
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
`;

function HolidayPlanCard({ plan, onEdit, onDelete, onGeneratePDF }) {
    console.log(plan);

  return (
    <CardContainer>
        <HolidayPlanList plans={[plan]}></HolidayPlanList>      
      <ButtonContainer>
        <Button edit onClick={() => onEdit(plan)}>Edit</Button>
        <Button onClick={() => onDelete(plan.id)}>Delete</Button>
        <Button onClick={onGeneratePDF}>PDF Generate</Button>
      </ButtonContainer>
    </CardContainer>
  );
}

export default HolidayPlanCard;
