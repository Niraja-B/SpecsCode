import React, { useState } from 'react';
import '../styles/ServicePage.css';
import serviceImage from '../images/service-image.jpg'; // Import the image
import ServiceForm from './ServiceForm'; // Import the ServiceForm component

const ServicePage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openModal = () => setIsFormVisible(true);
  const closeModal = () => setIsFormVisible(false);

  return (
    <div className="service-page">
      <div className="left-side">
        <h1 className="service-title">Need Service?</h1>
        <p className="service-description">ClearAhh provides home services for our customers with the golden membership.</p>
        <button className="need-service-button" onClick={openModal}>Need Service</button>
      </div>
      <div className="right-side">
        <img src={serviceImage} alt="Service" className="service-image" />
      </div>
      {isFormVisible && (
        <ServiceForm closeModal={closeModal} />
      )}
    </div>
  );
};

export default ServicePage;