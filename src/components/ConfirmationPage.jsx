import React from 'react';
import './ConfirmationPage.css';

const ConfirmationPage = () => {
  return (
    <div className="page-container">
      <p className="confirmation-message">Your name and age have been successfully added to the student system.</p>
      <p className="exit-message">You may now exit.</p>
    </div>
  );
};

export default ConfirmationPage;
