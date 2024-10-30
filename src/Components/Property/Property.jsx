import React from 'react';
import './Property.css';
import rob from '../../assets/rob.jpg';
import thief from '../../assets/thief.jpg';
import burglary from '../../assets/burglary.jpg';
import autotheft from '../../assets/autotheft.jpg';
import rob1 from '../../assets/rob1.jpg';
import thief1 from '../../assets/thief1.jpg';
import burglary1 from '../../assets/burglary1.jpg';
import autotheft1 from '../../assets/autotheft1.jpg';

const Property = () => {
  return (
    <div className="property">
      <div className="property-right">
        <h1>Property Crimes</h1>
        <p>Understanding Patterns in Property Crimes: Theft, Burglary & Vandalism</p>
      </div>
      <div className="property-left">
        <div className="property-item">
          <img src={rob} alt="Robbery" className="image" />
          <div className="caption">
            <img src={rob1} alt="Robbery Icon" />
            <p>Robbery Crime</p>
          </div>
        </div>
        <div className="property-item">
          <img src={thief} alt="Thief" className="image" />
          <div className="caption">
            <img src={thief1} alt="Thief Icon" />
            <p>Theft Crime</p>
          </div>
        </div>
        <div className="property-item">
          <img src={burglary} alt="Burglary" className="image" />
          <div className="caption">
            <img src={burglary1} alt="Burglary Icon" />
            <p>Burglary Crime</p>
          </div>
        </div>
        <div className="property-item">
          <img src={autotheft} alt="Auto Theft" className="image" />
          <div className="caption">
            <img src={autotheft1} alt="Auto Theft Icon" />
            <p>Auto Theft Crime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
