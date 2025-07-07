import React from 'react';
import './ResidentialServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHeart, faPills, faUsers, faHandsHelping, faBed } from '@fortawesome/free-solid-svg-icons';

export default function ResidentialServices() {
  return (
    <div className="page-root">
      <div className="main-card">
        <h2>Residential Services</h2>
        <p>
          At <strong>Treasured Circle</strong>, we provide 24/7 supportive living assistance
          for individuals with intellectual and developmental disabilities. Our caregivers
          ensure a safe, nurturing environment tailored to each participant’s unique needs.
        </p>
        <p>
          Our services are built around personalized plans, encouraging independence and social integration,
          while maintaining safety, comfort, and respect.
        </p>
      </div>

      <div className="feature-card">
        <h3>Key Services</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faHome} className="feature-icon" />
            <p>24/7 Supervision</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHeart} className="feature-icon" />
            <p>Personalized Care</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faPills} className="feature-icon" />
            <p>Medication Support</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
            <p>Community Inclusion</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHandsHelping} className="feature-icon" />
            <p>Life Skills</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faBed} className="feature-icon" />
            <p>Safe Living</p>
          </div>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
