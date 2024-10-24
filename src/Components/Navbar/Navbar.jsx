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
      <img src={logos} alt="" className='logos' />

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
              </li>
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('property')}>
                Property Crimes
              </li>
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('cyber')}>
                Cyber Crimes
              </li>
              <li className='dropdown-item'
                onMouseEnter={() => handleMouseEnter('white-collar')}>
                White Collar Crimes
              </li>
              <li className='dropdown-item'>Juvenile Crimes</li>
              <li className='dropdown-item'>IPC Crimes</li>
              <li className='dropdown-item'>Child Abuse</li>
              <li className='dropdown-item'>Person Arrested Age</li>
              <li className='dropdown-item'>Crime Against Women</li>
              <li className='dropdown-item'>Spatial Crimes</li>
            </ul>
          )}

          {/* Sub-menu for detailed crimes */}
          {activeCrimeType && (
            <ul className='sub-dropdown-menu'>
              {activeCrimeType === 'violent' && (
                <>
                  <li>Murder</li>
                  <li>Rapes</li>
                  <li>Kidnappings</li>
                </>
              )}
              {activeCrimeType === 'property' && (
                <>
                  <li>Robbery</li>
                  <li>Burglary</li>
                  <li>Theft</li>
                  <li>Auto Theft</li>
                </>
              )}
              {activeCrimeType === 'cyber' && (
                <>
                  <li>Fraud</li>
                  <li>Cyberbullying</li>
                  <li>Hacking</li>
                </>
              )}
              {activeCrimeType === 'white-collar' && (
                <>
                  <li>Corruption</li>
                  <li>Fraud</li>
                </>
              )}
            </ul>
          )}
        </li>

        <li>Miscellaneous</li> {/* Removed button styling here */}
      </ul>
    </nav>
  );
};

export default Navbar;
