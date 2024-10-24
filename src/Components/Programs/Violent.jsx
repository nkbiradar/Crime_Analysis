import React from 'react';
import './Violent.css';
import murder from '../../assets/murder.jpg';
import rape from '../../assets/rape.jpg';
import kidnap from '../../assets/kidnap.jpg';
import murder1 from '../../assets/murder1.jpg';
import rape1 from '../../assets/rape1.jpg';
import kidnap1 from '../../assets/kidnap1.jpg';

const Violent = () => {
  return (
    <div className='violent-container'>
      {/* Centered Header Section */}
      <div className="violent-header">
        <h1>Violent Crimes</h1>
        <p>Analyzing Patterns and Trends in Murder, Rape & Kidnapping</p>
      </div>
      
      {/* Image Grid Section */}
      <div className="violent-grid">
        <div className="violen">
          <img src={murder} alt="Murder Crime" />
          <div className="caption">
            <img src={murder1} alt="Icon" />
            <p>Murder Crime</p>
          </div>
        </div>
        <div className="violen">
          <img src={rape} alt="Rape Crime" />
          <div className="caption">
            <img src={rape1} alt="Icon" />
            <p>Rape Crime</p>
          </div>
        </div>
        <div className="violen">
          <img src={kidnap} alt="Kidnap Crime" />
          <div className="caption">
            <img src={kidnap1} alt="Icon" />
            <p>Kidnap Crime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Violent;
