import React from 'react';
import './Homemaker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBroom,
  faUtensils,
  faShoppingCart,
  faClipboardList,
  faBoxes,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';

export default function Homemaker() {
  return (
    <div className="page-root">
      <div className="main-card">
        <h2>Homemaker Services</h2>
        <p>
          At Treasured Circle, we understand that a clean and organized home environment promotes well-being and independence.
          Our homemaker services are designed to provide reliable help with everyday household tasks while promoting dignity and routine.
        </p>
        <p>
          We assist individuals who may be aging, have disabilities, or are recovering from illness, ensuring they can enjoy a safe,
          comfortable living space.
        </p>
      </div>

      <div className="feature-card">
        <h3>What We Help With</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faBroom} className="feature-icon" />
            <p>Light Housekeeping</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUtensils} className="feature-icon" />
            <p>Meal Preparation</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faShoppingCart} className="feature-icon" />
            <p>Grocery Shopping</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faClipboardList} className="feature-icon" />
            <p>Errands & Lists</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faBoxes} className="feature-icon" />
            <p>Organization Help</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHandsHelping} className="feature-icon" />
            <p>Daily Support</p>
          </div>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
