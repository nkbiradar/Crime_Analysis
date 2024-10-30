import React, { useState } from 'react';
import './Child.css';

// Import images for different categories of child abuse cases
import physicalAbuseImg from '../../assets/physical-abuse.jpg';
import emotionalAbuseImg from '../../assets/emotional-abuse.jpg';
import neglectImg from '../../assets/neglect.jpg';
import sexualAbuseImg from '../../assets/sexual-abuse.jpg';

const childAbuseData = [
  {
    section: 'Section 75',
    title: 'Physical Abuse',
    description: 'Punishment for anyone who abuses a child, causing physical harm.',
    image: physicalAbuseImg
  },
  {
    section: 'Section 23',
    title: 'Emotional Abuse',
    description: 'Punishment for causing emotional distress or trauma to a child.',
    image: emotionalAbuseImg
  },
  {
    section: 'Section 39',
    title: 'Child Neglect',
    description: 'Punishment for neglecting a child and depriving them of basic needs.',
    image: neglectImg
  },
  {
    section: 'Section 376AB',
    title: 'Sexual Abuse',
    description: 'Punishment for sexual abuse involving minors.',
    image: sexualAbuseImg
  },
  // Add more sections as needed
];

const ChildAbuse = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = childAbuseData.filter((abuse) =>
    abuse.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    abuse.section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="child-abuse-container">
      <h2>Child Abuse Laws</h2>

      <div className="child-abuse-search-bar">
        <input
          type="text"
          placeholder="Search by section or title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="child-abuse-list">
        {filteredData.map((abuse, index) => (
          <div key={index} className="child-abuse-item">
            <img src={abuse.image} alt={abuse.title} className="child-abuse-image" />
            <div className="child-abuse-content">
              <h3>{abuse.section}: {abuse.title}</h3>
              <p>{abuse.description}</p>
            </div>
          </div>
        ))}
        {filteredData.length === 0 && <p>No results found.</p>}
      </div>
    </div>
  );
};

export default ChildAbuse;
