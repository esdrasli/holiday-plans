import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HolidayPlanCard from './HolidayPlanCard';
import HolidayPlanForm from './HolidayPlanForm';
import PDFGenerator from './PDFGenerator';

const defaultColors = {
    primary: '#FF5500',
    secondary: '#0099FF',
    text: '#333333',
    background: '#f5e6e6dd'
  };
  
  const DashboardContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 90px;
    background-color: ${defaultColors.background};
  `;
  
  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  `;
  
  const AddPlanButton = styled.button`
    background-color: ${defaultColors.secondary};
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  `;

function Dashboard() {
    const [showForm, setShowForm] = useState(false);
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showPDFGenerator, setShowPDFGenerator] = useState(false);
  
    useEffect(() => {
      fetchPlans();
    }, []);
  
    const fetchPlans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/plans');
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
  
    const addPlan = async (newPlan) => {
      try {
        const response = await axios.post('http://localhost:5000/api/plans', newPlan);
        const addedPlan = response.data;
        setPlans([...plans, addedPlan]);
        toggleForm();
      } catch (error) {
        console.error('Error adding plan:', error);
      }
    };
  
    const deletePlan = async (id) => {
      try {
        await axios.delete(`http://localhost:5000/api/plans/${id}`);
        setPlans(plans.filter(plan => plan.id !== id));
      } catch (error) {
        console.error('Error deleting plan:', error);
      }
    };
  
    const editPlan = (plan) => {
      setSelectedPlan(plan);
      setShowForm(true);
    };
  
    const updatePlan = async (updatedPlan) => {
      try {
        await axios.put(`http://localhost:5000/api/plans/${updatedPlan.id}`, updatedPlan);
        const updatedPlans = plans.map((plan) =>
          plan.id === updatedPlan.id ? updatedPlan : plan
        );
        setPlans(updatedPlans);
        toggleForm();
      } catch (error) {
        console.error('Error updating plan:', error);
      }
    };
  
    const toggleForm = () => {
      setShowForm(!showForm);
      setSelectedPlan(null);
    };
  
    const handleGeneratePDF = (planId) => {
      const selectedPlan = plans.find(plan => plan.id === planId);
      setSelectedPlan(selectedPlan);
      setShowPDFGenerator(true);
    };
  
    return (
      <DashboardContainer>
        <h1>Dashboard</h1>
        {showForm ? (
          <HolidayPlanForm
            initialValues={selectedPlan}
            onSubmit={selectedPlan ? updatePlan : addPlan}
            onCancel={toggleForm}
          />
        ) : showPDFGenerator ? (
          <PDFGenerator plans={[selectedPlan]} /> 
        ) : (
          <>
            <AddPlanButton onClick={toggleForm}>New Plan</AddPlanButton>
            <GridContainer>
              {plans.map((plan) => (
                <HolidayPlanCard
                  key={plan.id}
                  plan={plan}
                  onEdit={editPlan}
                  onDelete={deletePlan}
                  onGeneratePDF={() => handleGeneratePDF(plan.id)}
                />
              ))}
            </GridContainer>
          </>
        )}
      </DashboardContainer>
    );
  }
  
  export default Dashboard;