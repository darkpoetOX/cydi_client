import React from 'react';
import { Link } from 'react-router-dom';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Can You Do It?</h1>
      <div className="button-container">
        <div className="role-container">
          <h2>I'm a Candidate</h2>
          <Link to="/candidate-registration">
            <button className="big-button">Discover and Apply for Jobs</button>
          </Link>
        </div>
        <div className="role-container">
          <h2>I'm an Employer</h2>
          <Link to="/employer-registration">
            <button className="big-button">Post Jobs and View Applicants</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
