import React from 'react';
import './Women.css';
import crimeImage from '../../assets/crimeagainstwomen.jpg'; // Single image for crimes against women

const CrimeAgainstWomen = () => {
  return (
    <div className="women">
      <div className="women-header">
        <h1>Crimes Against Women</h1>
        <p>Raising awareness about issues faced by women globally.</p>
      </div>
      <div className="women-content">
        <div className="women-item">
          <img src={crimeImage} alt="Crimes Against Women" className="image" />
          <div className="caption">
            <p>Domestic Violence, Harassment, Trafficking & More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeAgainstWomen;
