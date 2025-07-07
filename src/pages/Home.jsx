import React from 'react';
import './Home.css';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Home() {
  const sections = [
    {
      variant: 'hero',
      image: '/empower.png',
      title: 'Empowering Hope, Healing Lives',
      description: 'Treasured Circle is a program approved service agency with a centered approach of offering the best support to individuals with intellectual and developmental disabilities.',
      buttonText: 'Explore Services',
      href: '/services/residential' // Added proper href
    },
    {
      title: 'Our Mission',
      image: '/mission.png',
      description: 'At Treasured Circle, our mission is to enrich the lives of all participants by providing personalized care services which promote independence, dignity, and well-being.',
      buttonText: 'Learn More',
      href: '/about' // Added proper href
    },
    {
      title: 'From Our Team',
      image: '/team.png',
      description: 'With a commitment to compassion, professionalism, and excellence, we stand ready to embark on this journey with you.',
      buttonText: 'View Openings',
      href: '/contact' // Added proper href (or careers page if you have one)
    },
    {
      title: 'Online Therapy',
      image: '/online.png',
      description: 'Remote sessions from the comfort of your home.',
      buttonText: 'Coming Soon',
      // No href since it's coming soon
    },
    {
      variant: 'cta',
      title: 'Ready to Begin Your Healing Journey?',
      description: 'Connect with compassionate mental health professionals today.',
      buttonText: 'Contact Us',
      href: '/contact', // Added proper href
      fullWidth: true
    }
  ];

  return (
    <div className="home-root">
      <main className="home-main">
        {/* Hero Card */}
        <section className="hero-duo">
          <Card
            className="hero-card"
            variant="hero"
            image="/empower.png"
            title="Empowering Hope, Healing Lives"
            description="Treasured Circle is a program approved service agency with a centered approach of offering the best support to individuals with intellectual and developmental disabilities."
            buttonText="Explore Services"
            href="/services/respite" // Changed from #services to actual route
          />
          <Card
            className="hero-card"
            variant="hero"
            image="/companionship.png"
            title="Companionship & Social Support"
            description="Loneliness can impact overall well-being, so our caregivers offer friendly companionship. Our caregivers provide compassionate support with daily personal care tasks."
            buttonText="Discover More"
            href="/About"
          />
        </section>

        {/* Services Grid */}
        <section id="services" className="home-section">
          <h2 className="home-section-title">What We Do</h2>
          <div className="home-services-grid">
            {sections.slice(1, 4).map((service, index) => (
              <Card key={`service-${index}`} {...service} />
            ))}
          </div>
        </section>

        {/* Resources Grid */}
        <section className="home-section">
          <h2 className="home-section-title">Our Resources</h2>
          <div className="resources-grid">
            <Link to="/services/residential">
              <Card
                variant="resources"
                image="/residential services.png"
                title="RESIDENTIAL SERVICES"
              />
            </Link>
            <Link to="/services/respite">
              <Card
                variant="resources"
                image="/respite.png"
                title="RESPITE"
              />
            </Link>
            <Link to="/services/personal-care">
              <Card
                variant="resources"
                image="/personalcare.png"
                title="PERSONAL CARE"
              />
            </Link>
            <Link to="/services/homemaker">
              <Card
                variant="resources"
                image="/homemaker.png"
                title="HOMEMAKER"
              />
            </Link>
            <Link to="/services/mentorship">
              <Card
                variant="resources"
                image="/mentorship.png"
                title="MENTORSHIP"
              />
            </Link>
            <Link to="/community">
              <Card
                variant="resources"
                image="/community.png"
                title="COMMUNITY"
              />
            </Link>
          </div>
        </section>

        {/* CTA Card */}
        <section>
          <Card {...sections[4]} />
        </section>
      </main>
    </div>
  );
}