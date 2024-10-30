import React, { useEffect } from 'react';
import L from 'leaflet';
import './SpatialAnalysisMap.css'; // Import the enhanced CSS file for styling
import 'leaflet/dist/leaflet.css';  // Leaflet’s default CSS

const SpatialAnalysisMap = () => {
  useEffect(() => {
    const map = L.map('map').setView([17.0, 84.5], 6); // Set initial view (latitude, longitude, zoom level)

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Sample crime data
    const crimeData = [
      { id: 1, type: "Theft", location: [17.1, 84.5], description: "Theft incident reported" },
      { id: 2, type: "Assault", location: [17.05, 84.52], description: "Assault reported" },
      { id: 3, type: "Vandalism", location: [17.02, 84.58], description: "Vandalism in the area" },
    ];

    // Adding markers for each crime
    crimeData.forEach(crime => {
      const marker = L.marker(crime.location).addTo(map);
      marker.bindPopup(`<strong>${crime.type}</strong><br>${crime.description}`);
    });

    // Cleanup function to remove the map instance
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="spatial-analysis-container">
      <h2>Spatial Analysis</h2>
      <p>Interactive map analysis using OpenStreetMap and Leaflet.js.</p>
      <div id="map" className="map"></div>
    </div>
  );
};

export default SpatialAnalysisMap;
