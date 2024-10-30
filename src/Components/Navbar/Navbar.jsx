import React, { useState } from 'react';
import './Navbar.css';
import logos from '../../assets/logos4.jpg';

const Navbar = () => {
  // State to handle dropdown visibility
  const [isCrimeDropdownOpen, setIsCrimeDropdownOpen] = useState(false);
  const [activeCrimeType, setActiveCrimeType] = useState(null);

  const handleMouseEnter = (type) => {
    setActiveCrimeType(type);
  };

  return (
    <nav className='container dark-nav'>
      <img src={logos} alt="Logo" className='logos' />

      <ul>
        <li>Home</li>
        
        {/* Crime Types Dropdown */}
        <li 
          className='dropdown'
          onMouseEnter={() => setIsCrimeDropdownOpen(true)}
          onMouseLeave={() => {
            setIsCrimeDropdownOpen(false);
            setActiveCrimeType(null); // Reset active submenu
          }}
        >
          Crime Types
          {isCrimeDropdownOpen && (
            <ul className='dropdown-menu'>
              {/* Main categories */}
              <li className='dropdown-item' 
                onMouseEnter={() => handleMouseEnter('violent')}>
                Violent Crimes
                {activeCrimeType === 'violent' && (
                  <ul className='sub-dropdown-menu'>
                    <li>Murder</li>
                    <li>Rapes</li>
                    <li>Kidnappings</li>
                  </ul>
                )}
              </li>
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('property')}>
                Property Crimes
                {activeCrimeType === 'property' && (
                  <ul className='sub-dropdown-menu'>
                    <li>Robbery</li>
                    <li>Burglary</li>
                    <li>Theft</li>
                    <li>Auto Theft</li>
                  </ul>
                )}
              </li>
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('cyber')}>
                Cyber Crimes
                {activeCrimeType === 'cyber' && (
                  <ul className='sub-dropdown-menu'>
                    <li>Fraud</li>
                    <li>Cyberbullying</li>
                    <li>Hacking</li>
                  </ul>
                )}
              </li>
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('white-collar')}>
                White Collar Crimes
                {activeCrimeType === 'white-collar' && (
                  <ul className='sub-dropdown-menu'>
                    <li>Corruption</li>
                    <li>Credit Card Fraud</li>
                  </ul>
                )}
              </li>
              {/* Juvenile Crimes Dropdown */}
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('juvenile')}>
                Juvenile Crimes
                {activeCrimeType === 'juvenile' && (
                  <ul className='sub-dropdown-menu'>
                    <li>Juvenile Crime</li>
                    <li>Assaultment Crime</li>
                  </ul>
                )}
              </li>
              <li className='dropdown-item'>IPC Crimes</li>
              <li className='dropdown-item'>Child Abuse</li>
              <li className='dropdown-item'>Person Arrested Age</li>
              <li className='dropdown-item'>Crime Against Women</li>
              <li className='dropdown-item'>Spatial Crimes</li>
            </ul>
          )}
        </li>

        <li>Miscellaneous</li>
      </ul>
    </nav>
  );
};

export default Navbar;
