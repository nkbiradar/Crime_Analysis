import React, { useState } from 'react';
import './IPC.css';

// Local images (optional)
import murderImg from '../../assets/murder2.jpg';
import murderImg2 from '../../assets/murder3.jpg';
import robberyImg from '../../assets/rob2.jpg';
import rapeImg from '../../assets/rape2.jpg';
import crueltyImg from '../../assets/cruelty.jpg';

const ipcData = [
  { section: 'Section 302', title: 'Murder', description: 'Punishment for committing murder.', image: murderImg },
  { section: 'Section 307', title: 'Attempt to Murder', description: 'Punishment for attempting to commit murder.', image: murderImg2 },
  { section: 'Section 376', title: 'Rape', description: 'Punishment for committing rape.', image: rapeImg },
  { section: 'Section 392', title: 'Robbery', description: 'Punishment for committing robbery.', image: robberyImg },
  { section: 'Section 498A', title: 'Cruelty by Husband or Relatives', description: 'Punishment for cruelty by husband or his relatives towards the wife.', image: crueltyImg },
  // Add more IPC sections with images
];

const IPC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = ipcData.filter((ipc) =>
    ipc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ipc.section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ipc-container">
      <h2>IPC Crimes</h2>

      <div className="ipc-search-bar">
        <input
          type="text"
          placeholder="Search by section or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="ipc-list">
        {filteredData.map((ipc, index) => (
          <div key={index} className="ipc-item">
            <img src={ipc.image} alt={ipc.title} className="ipc-image" />
            <div className="ipc-content">
              <h3>{ipc.section}: {ipc.title}</h3>
              <p>{ipc.description}</p>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
};

export default IPC;
