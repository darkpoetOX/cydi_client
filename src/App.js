import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Footer';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          {/* other routes here as needed */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

