import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CandidateContainer from './containers/CandidateContainer';
import EmployerContainer from './containers/EmployerContainer';
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
          <Route path="/candidate" element={<CandidateContainer />} />
          <Route path="/employer" element={<EmployerContainer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;


