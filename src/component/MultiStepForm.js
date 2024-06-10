import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = ({ handleClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />;
    case 3:
      return <Step3 prevStep={prevStep} formData={formData} />;
    default:
      return <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />;
  }
};

export default MultiStepForm;
