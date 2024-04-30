import React, { useState } from 'react';
import CandidateLogIn from './CandidateLogIn';
import EmployerLogIn from './EmployerLogIn';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [candidate, setCandidate] = useState(null);
  const [employer, setEmployer] = useState(null);

  const handleCandidateLogIn = (candidate) => {
    setIsLoggedIn(true);
    setCandidate(candidate);
  };

  const handleEmployerLogIn = (employer) => {
    setIsLoggedIn(true);
    setEmployer(employer);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setCandidate(null);
    setEmployer(null);
  };

  return (
    <nav>
      <div className="logo">CYDI</div>
      {isLoggedIn ? (
        <div className="user-info">
          {candidate && <p>Welcome, {candidate.firstName}!</p>}
          {employer && <p>Welcome, {employer.companyName}!</p>}
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <>
          <CandidateLogIn onLogIn={handleCandidateLogIn} />
          <EmployerLogIn onLogIn={handleEmployerLogIn} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
