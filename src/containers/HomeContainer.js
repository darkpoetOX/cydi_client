import React from 'react';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Can You Do It?</h1>
      <div className="button-container">
        <div className="role-container">
          <h2>I'm a Candidate</h2>
          <button className="big-button">Discover and Apply for Jobs</button>
        </div>
        <div className="role-container">
          <h2>I'm an Employer</h2>
          <button className="big-button">Post Jobs and View Applicants</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;


