import React from 'react';
import './Juvenile.css';
// Import images for juvenile crimes
import juvenileImg from '../../assets/juvenile.jpg'; // Main juvenile crimes image
import juvenImg from '../../assets/juven.jpg'; // Secondary juvenile crimes image

// Icon images for each crime type
import juvenileIcon from '../../assets/juvenile1.jpg'; // Icon for the main image
import juvenIcon from '../../assets/juven1.jpg'; // Icon for the secondary image

const Juvenile = () => {
  return (
    <div className="juvenile-container">
      <div className="juvenile-header">
        <h1>Juvenile Crimes</h1>
        <p>Understanding the Impact and Trends of Juvenile Offenses</p>
      </div>
      
      {/* Display the main and secondary juvenile crime images with icons */}
      <div className="juvenile-images">
        <div className="juvenile-image-item">
          <img src={juvenileImg} alt="Juvenile Crimes Overview" className="main-image" />
          <div className="caption">
            <img src={juvenileIcon} alt="Juvenile Icon" />
            <p>Juvenile crime</p>
          </div>
        </div>
        <div className="juvenile-image-item">
          <img src={juvenImg} alt="Juvenile Crime Scene" className="secondary-image" />
          <div className="caption">
            <img src={juvenIcon} alt="Juven Icon" />
            <p>Assaultment Crime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Juvenile;
