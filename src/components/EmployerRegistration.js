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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/employers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        console.log('Employer registration successful');
        // You may want to redirect the user to another page or show a success message
      } else {
        // Registration failed
        console.error('Employer registration failed');
        // You may want to display an error message to the user
      }
    } catch (error) {
      console.error('Error during employer registration:', error);
      // You may want to display an error message to the user
    }
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployerRegistration;
