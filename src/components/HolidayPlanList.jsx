import React from 'react';

function HolidayPlanList({ plans }) {    
  if (!Array.isArray(plans)) {
    return 
  }  

  return (
    <div>
      {plans.map((plan) => (
        <div key={plan.id}>
          <h3>{plan.title}</h3>
          <p><strong>Description:</strong> {plan.description}</p>
          <p><strong>Date:</strong> {plan.date}</p>
          <p><strong>Location:</strong> {plan.location}</p>
          <p><strong>Participants:</strong> {plan.participants}</p>
        </div>
      ))}
    </div>
  );
}

export default HolidayPlanList;
