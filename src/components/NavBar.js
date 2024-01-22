import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from 'react-bootstrap-icons';

const Navbar = ({ isLoggedIn, userType }) => {
  return (
    <nav>
      <div className="logo">CYDI</div>
      {isLoggedIn ? (
        <Person size={24} />
      ) : (
        <div className="user-buttons">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
