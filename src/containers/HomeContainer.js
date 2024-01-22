import React from 'react';

import { Link } from 'react-router-dom';

const HomeContainer = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">CYDI</div>
        {/* Add user icon here */}
      </nav>

      <div className="welcome-section">
        <h1>Welcome to Can You Do It?</h1>
        <div className="user-options">
          <div className="user-type">
            <h2>I'm a Candidate</h2>
            <Link to="/jobs">
              <button>Discover and Apply for Jobs</button>
            </Link>
          </div>

          <div className="user-type">
            <h2>I'm an Employer</h2>
            <Link to="/post-job">
              <button>Post Jobs and View Candidates</button>
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <Link to="/about">About Us</Link>
          <Link to="/customer-support">Customer Support</Link>
          <Link to="/connect">Connect</Link>
        </div>
      </footer>
    </div>
  );
};

export default HomeContainer;
