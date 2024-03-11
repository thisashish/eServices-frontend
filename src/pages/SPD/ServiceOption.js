// ServiceOption.js
import React from 'react';
import CSS from "../SP/D.css"

const ServiceOption = ({ title, onClick }) => (
  <div>
    <button onClick={onClick}>{title}</button>
  </div>
);

export default ServiceOption;
