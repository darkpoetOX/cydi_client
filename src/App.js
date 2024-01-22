import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import CandidateContainer from './containers/CandidateContainer';
import EmployerContainer from './containers/EmployerContainer';
import DashboardContainer from './containers/DashboardContainer';
import ViewJobsContainer from './containers/ViewJobsContainer';
import PostJobContainer from './containers/PostJobContainer';
import ViewApplicantsContainer from './containers/ViewApplicantsContainer';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* Defines routes for different pages */}
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/candidate" element={<CandidateContainer />} />
          <Route path="/employer" element={<EmployerContainer />} />
          <Route path="/dashboard" element={<DashboardContainer />} />
          <Route path="/view-jobs" element={<ViewJobsContainer />} />
          <Route path="/post-job" element={<PostJobContainer />} />
          <Route path="/view-applicants" element={<ViewApplicantsContainer />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

