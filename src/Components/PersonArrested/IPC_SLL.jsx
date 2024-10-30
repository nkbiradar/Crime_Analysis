import React, { useState } from 'react';
import './IPC_SLL.css'; // Create a separate CSS file for styling
import arrestedPersonImage from '../../assets/arrested_person.jpg'; // Arrested person image
import ageIcon from '../../assets/age_icon.jpg'; // Age icon
import sexIcon from '../../assets/sex_icon.jpg'; // Sex icon
import ipcIcon from '../../assets/ipc_icon.png'; // IPC/SLL icon

const arrestedData = [
  { id: 1, name: 'John Doe', age: 30, sex: 'Male', law: 'IPC Section 302' },
  { id: 2, name: 'Jane Smith', age: 25, sex: 'Female', law: 'SLL Section 7' },
  { id: 3, name: 'Sam Wilson', age: 22, sex: 'Male', law: 'IPC Section 420' },
  { id: 4, name: 'Emily Davis', age: 29, sex: 'Female', law: 'IPC Section 376' },
];

const PersonArrested = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = arrestedData.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.law.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="arrested-container">
      <h2>Persons Arrested</h2>

      <div className="arrested-search-bar">
        <input
          type="text"
          placeholder="Search by name or law..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="arrested-list">
        {filteredData.map((person) => (
          <div className="arrested-item" key={person.id}>
            <img src={arrestedPersonImage} alt="Arrested Person" className="arrested-image" />
            <div className="details">
              <h3>{person.name}</h3>
              <div className="info">
                <div className="info-item">
                  <img src={ageIcon} alt="Age Icon" className="icon" />
                  <p>Age: {person.age}</p>
                </div>
                <div className="info-item">
                  <img src={sexIcon} alt="Sex Icon" className="icon" />
                  <p>Sex: {person.sex}</p>
                </div>
                <div className="info-item">
                  <img src={ipcIcon} alt="IPC/SLL Icon" className="icon" />
                  <p>Law: {person.law}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
};

export default PersonArrested;
