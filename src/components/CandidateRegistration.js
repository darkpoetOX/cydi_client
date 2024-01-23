import React, { useState } from 'react';

const CandidateRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    console.log('Candidate Form Submitted:', formData);
    // Add logic to handle form submission, e.g., API call, validation, etc.
  };

  return (
    <div>
      <h2>Candidate Registration Page</h2>
      <form onSubmit={handleSubmit}>
        {/* ... your form fields ... */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CandidateRegistration;
