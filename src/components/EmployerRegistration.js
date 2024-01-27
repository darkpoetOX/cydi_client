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

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployerRegistration;
