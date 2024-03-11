import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

function HolidayPlanForm({ onSubmit, onCancel, initialValues }) {
  const { register, handleSubmit } = useForm({
    defaultValues: initialValues
  });

  const submitForm = (data) => {
    onSubmit(data);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <FormContainer>
      <h2>{initialValues ? 'Editar Plano' : 'Adicionar Novo Plano'}</h2>
      <Form onSubmit={handleSubmit(submitForm)}>
        <Input type="text" {...register("title", { required: true })} placeholder="Title" />
        <Input type="text" {...register("description")} placeholder="Description" />
        <Input type="date" {...register("date", { required: true })}/>
        <Input type="text" {...register("location")} placeholder="Location" />
        <Input type="text" {...register("participants")} placeholder="Participants" />
        <ButtonContainer>
          <Button type="submit">{initialValues ? 'Save' : 'Add'}</Button>
          <Button type="button" onClick={handleCancel}>Cancel</Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
}

export default HolidayPlanForm;
