import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <main className="about-main">
        <div className="about-content">
          <div className="about-text">
            <h1>About Treasured Circle</h1>
            <p>
              <strong>Why Us – We Offer You Home Provider Services</strong><br />
              Treasured Circle is a program-approved service agency with a centered goal of offering the best support to individuals with intellectual and developmental disabilities. Each individual is thoughtfully assessed based on their unique needs and then paired with an experienced member of our team who is best suited to support those needs.
              Whether it’s in one of our residential settings, a participant’s home, an independent living environment, or out in the community, we aim to create a nurturing space where all individuals feel safe, valued, and empowered to grow. 
              Our dedicated staff works closely with families and support teams to ensure personalized, compassionate care tailored to each journey. 
              Together, we build a circle of trust, respect, and encouragement.
            </p>
          </div>
          <div className="about-image">
            <img src="/about.jpg" alt="About Treasured Circle" />
          </div>
        </div>
      </main>
    </div>
  );
}
