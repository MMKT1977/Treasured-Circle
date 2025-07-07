import React from 'react';
import './Respite.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faUserFriends, faSmile, faCouch, faHeartbeat } from '@fortawesome/free-solid-svg-icons';

export default function Respite() {
  return (
    <div className="page-root">
      <div className="main-card">
        <h2>Respite Care</h2>
        <p>
          Treasured Circle offers short-term respite care designed to provide relief for primary
          caregivers while ensuring individuals continue to receive high-quality, compassionate support.
        </p>
        <p>
          Whether for a few hours or several days, our flexible and safe respite options help maintain
          continuity of care in a trusted environment.
        </p>
      </div>

      <div className="feature-card">
        <h3>What We Provide</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faClock} className="feature-icon" />
            <p>Flexible Hours</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="feature-icon" />
            <p>Scheduled Relief</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUserFriends} className="feature-icon" />
            <p>Trained Staff</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faSmile} className="feature-icon" />
            <p>Engaging Activities</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCouch} className="feature-icon" />
            <p>Comfortable Setting</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHeartbeat} className="feature-icon" />
            <p>Wellness Monitoring</p>
          </div>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
