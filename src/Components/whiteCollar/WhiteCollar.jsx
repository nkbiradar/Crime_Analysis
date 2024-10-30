import React from 'react';
import './WhiteCollar.css';
import corruption from '../../assets/corruption.jpg'; // Corruption image
import creditCardFraud from '../../assets/creditcard.jpg'; // Credit Card Fraud image

// Icon images
import corruptionIcon from '../../assets/corruption1.jpg';
import creditCardFraudIcon from '../../assets/creditcard1.jpg';

const WhiteCollar = () => {
  return (
    <div className="white-collar-container">
      <div className="white-collar-header">
        <h1>White-Collar Crimes</h1>
        <p>Understanding Different Types of White-Collar Crimes: Corruption & Credit Card Fraud</p>
      </div>
      <div className="white-collar-grid">
        <div className="white-collar-item">
          <img src={corruption} alt="Corruption" className="image" />
          <div className="caption">
            <img src={corruptionIcon} alt="Corruption Icon" />
            <p>Corruption</p>
          </div>
        </div>
        <div className="white-collar-item">
          <img src={creditCardFraud} alt="Credit Card Fraud" className="image" />
          <div className="caption">
            <img src={creditCardFraudIcon} alt="Credit Card Fraud Icon" />
            <p>Credit Card Fraud</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhiteCollar;
