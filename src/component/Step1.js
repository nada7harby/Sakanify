import React from 'react';
import { useForm } from 'react-hook-form';

const Step1 = ({ nextStep, formData, setFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData
  });

  const onSubmit = (data) => {
    setFormData({ ...formData, ...data });
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register('firstName', { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>
      <div>
        <label>Last Name</label>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <span>This field is required</span>}
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
