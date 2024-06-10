import React from 'react';
import { useForm } from 'react-hook-form';

const Step2 = ({ nextStep, prevStep, formData, setFormData }) => {
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
        <label>Email</label>
        <input {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
