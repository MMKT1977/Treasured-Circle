import React from 'react';
import './Community.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBus,
  faUsers,
  faHandshake,
  faCalendarAlt,
  faTheaterMasks,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';

export default function Community() {
  return (
    <div className="page-root">
      <div className="main-card">
        <h2>Community Support</h2>
        <p>
          Treasured Circle offers comprehensive community support services that encourage inclusion, connection, and real-world participation
          for individuals with disabilities. We believe everyone should have the opportunity to experience life in the community with confidence.
        </p>
        <p>
          Our dedicated team provides transportation, guidance, and companionship during outings and helps participants explore volunteer work,
          employment options, and recreational events.
        </p>
      </div>

      <div className="feature-card">
        <h3>Community Engagement Services</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faBus} className="feature-icon" />
            <p>Transportation</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUsers} className="feature-icon" />
            <p>Social Events</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faHandshake} className="feature-icon" />
            <p>Volunteering</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="feature-icon" />
            <p>Appointments</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faTheaterMasks} className="feature-icon" />
            <p>Recreation</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faLightbulb} className="feature-icon" />
            <p>Skill Building</p>
          </div>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
