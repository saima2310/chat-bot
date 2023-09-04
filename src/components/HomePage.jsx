import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-container">
      <h1>Enter into Student Info System</h1>
      <Link to="/chatbot" className="enroll-button">
        Enroll Now!
      </Link>
    </div>
  );
};

export default HomePage;
