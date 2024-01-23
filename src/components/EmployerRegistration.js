import React, { useState } from 'react';

const EmployerRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employer Form Submitted:', formData);
    // Add logic to handle form submission, e.g., API call, validation, etc.
  };

  return (
    <div>
      <h2>Employer Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />

        {/* ... other form fields ... */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployerRegistration;
