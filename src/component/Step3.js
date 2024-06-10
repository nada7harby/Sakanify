import React from 'react';

const Step3 = ({ prevStep, formData }) => {
  const handleSubmit = () => {
    // Handle final form submission here
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Confirm your details</h2>
      <ul>
        <li>First Name: {formData.firstName}</li>
        <li>Last Name: {formData.lastName}</li>
        <li>Email: {formData.email}</li>
      </ul>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
