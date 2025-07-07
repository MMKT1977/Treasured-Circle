import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-title">TREASURED CIRCLE.</h4>
          <p className="footer-text">
            With a commitment to compassion, professionalism, and excellence, we stand ready to embark on this journey with you.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-links">
            <li><Link to="/services/mentorship" className="footer-link">Mentorship</Link></li>
            <li><Link to="/community" className="footer-link">Community</Link></li>
            <li><Link to="/services/homemaker" className="footer-link">Homemaker</Link></li>
            <li><Link to="/services/personal-care" className="footer-link">Personal Care</Link></li>
            <li><Link to="/services/respite" className="footer-link">Respite</Link></li>
            <li><Link to="/services/residential" className="footer-link">Residential</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>

          <div className="footer-logo">
            <img src="/tclogo.png" alt="Treasured Circle Logo" className="logo-img" />
          </div>
        </div>

        <div className="footer-section newsletter">
          <h4 className="footer-heading">Newsletter</h4>
          <form className="subscribe-form" action="#" method="post">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <p className="newsletter-text">
            Subscribe to our mailing list and get updates to your email inbox.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Treasured Circle. All rights reserved.
      </div>
    </footer>
  );
}
