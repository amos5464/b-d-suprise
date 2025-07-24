import React from 'react';
import './styles.css';

function BirthdayCard({ message }) {
  return (
    <div className="birthday-card">
      <div className="crown crown-left"></div>
      <div className="message">{message}</div>
      <div className="crown crown-right"></div>
    </div>
  );
}

export default BirthdayCard;