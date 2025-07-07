import React from 'react';
import './Mentorship.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faUserFriends,
  faBriefcase,
  faChalkboardTeacher,
  faComments,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

export default function Mentorship() {
  return (
    <div className="page-root">
      <div className="main-card">
        <h2>Mentorship Program</h2>
        <p>
          Our Mentorship Program at Treasured Circle focuses on nurturing growth, independence, and confidence in individuals with intellectual
          or developmental disabilities through one-on-one relationships with trained mentors.
        </p>
        <p>
          These connections empower participants to build life skills, set personal goals, and navigate everyday challenges with
          a strong support system beside them.
        </p>
      </div>

      <div className="feature-card">
        <h3>Core Areas of Focus</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <FontAwesomeIcon icon={faBullseye} className="feature-icon" />
            <p>Goal Setting</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUserFriends} className="feature-icon" />
            <p>Social Skills</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faBriefcase} className="feature-icon" />
            <p>Job Readiness</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="feature-icon" />
            <p>Life Coaching</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faComments} className="feature-icon" />
            <p>Communication</p>
          </div>
          <div className="feature-item">
            <FontAwesomeIcon icon={faUserGraduate} className="feature-icon" />
            <p>Self-Development</p>
          </div>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
}
