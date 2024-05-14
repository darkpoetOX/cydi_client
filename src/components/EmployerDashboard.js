import React, { useState } from 'react';
import PostJobModal from './PostJobModal';

const EmployerDashboard = () => {
    // State variables for handling modal open/close
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Function to handle modal open/close
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    // Function to handle job submission
    const handleSubmitJob = (jobData) => {
      // Logic to submit job details to backend
      console.log('Submitted job:', jobData);
    };
  
    return (
      <div>
        <button onClick={openModal}>Post a Job</button>
        <PostJobModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmitJob} />
      </div>
    );
  };
  
  export default EmployerDashboard;