import React, { useState } from 'react';
import Modal from 'react-modal';

const PostJobModal = ({ isOpen, onClose, onSubmit }) => {
  // State variables for handling job details
  const [jobTitle, setJobTitle] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobFormat, setJobFormat] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Function to handle job submission
  const handleSubmitJob = () => {
    // Logic to submit job details
    onSubmit({ jobTitle, jobType, jobFormat, jobDescription });
    onClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Post Job Modal"
    >
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmitJob}>
        <div>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobType">Job Type:</label>
          <input
            type="text"
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobFormat">Job Format:</label>
          <input
            type="text"
            id="jobFormat"
            value={jobFormat}
            onChange={(e) => setJobFormat(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default PostJobModal;
