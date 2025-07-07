import React from 'react';
import './PersonalCare.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShower,
  faToilet,
  faWheelchair,
  faUtensils,
  faHandsWash,
  faUserNurse,
} from '@fortawesome/free-solid-svg-icons';

export default function PersonalCare() {
  return (
    <div className="page-root">
      <div className="main-card">
        <h2>Personal Care Assistance</h2>
        <p>
          Treasured Circle provides compassionate and dignified personal care services to help individuals
          maintain daily hygiene, mobility, and independence in their homes.
        </p>
        <p>
          Our trained caregivers focus on respect, safety, and personalized support—ensuring each person receives care tailored
          to their unique needs and routines.
        </p>
      </div>

      <div className="feature-card">
        <h3>What We Support</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faShower} className="feature-icon" />
            <p>Bathing & Grooming</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faToilet} className="feature-icon" />
            <p>Toileting Assistance</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faWheelchair} className="feature-icon" />
            <p>Mobility Help</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUtensils} className="feature-icon" />
            <p>Meal Feeding</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHandsWash} className="feature-icon" />
            <p>Hygiene Support</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUserNurse} className="feature-icon" />
            <p>Dressing Assistance</p>
          </div>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
