import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CandidateRegistration from './components/CandidateRegistration';
import EmployerRegistration from './components/EmployerRegistration';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/candidate-registration" element={<CandidateRegistration />} />
          <Route path="/employer-registration" element={<EmployerRegistration />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


