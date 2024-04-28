import React, { useState } from 'react';
import LogIn from './LogIn';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogIn = (candidate) => {
    setIsLoggedIn(true);
    setUser(candidate);
  };

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <nav>
      <div className="logo">CYDI</div>
      {isLoggedIn ? (
        <div className="user-info">
          <div>{user.name}</div>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      ) : (
        <LogIn onLogIn={handleLogIn} />
      )}
    </nav>
  );
};

export default NavBar;



