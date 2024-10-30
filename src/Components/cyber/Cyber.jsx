import React from 'react';
import './Cyber.css';
import cyber from '../../assets/cyber.jpg'; // Cyber image
import cyberbully from '../../assets/cyberbully.jpg'; // Cyber Bullying image
import fraud from '../../assets/fraud.jpg'; // Fraud image
import hacking from '../../assets/hacking.jpg'; // Hacking image

// Icon images
import cyberIcon from '../../assets/cyber1.jpg';
import cyberbullyIcon from '../../assets/cyberbully1.jpg';
import fraudIcon from '../../assets/fraud1.jpg';
import hackingIcon from '../../assets/hacking1.jpg';

const Cyber = () => {
  return (
    <div className="cyber">
      <div className="cyber-right">
        <h1>Cyber Crimes</h1>
        <p>Exploring Types of Cyber Crimes: Cyber Crimes, Cyber Bullying, Fraud & Hacking</p>
      </div>
      <div className="cyber-left">
        <div className="cyber-item">
          <img src={cyber} alt="Cyber Crimes" className="image" />
          <div className="caption">
            <img src={cyberIcon} alt="Cyber Crimes Icon" />
            <p>Cyber Crimes</p>
          </div>
        </div>
        <div className="cyber-item">
          <img src={cyberbully} alt="Cyber Bullying" className="image" />
          <div className="caption">
            <img src={cyberbullyIcon} alt="Cyber Bullying Icon" />
            <p>Cyber Bullying</p>
          </div>
        </div>
        <div className="cyber-item">
          <img src={fraud} alt="Fraud" className="image" />
          <div className="caption">
            <img src={fraudIcon} alt="Fraud Icon" />
            <p>Fraud</p>
          </div>
        </div>
        <div className="cyber-item">
          <img src={hacking} alt="Hacking" className="image" />
          <div className="caption">
            <img src={hackingIcon} alt="Hacking Icon" />
            <p>Hacking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
