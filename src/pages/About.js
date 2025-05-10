import React from 'react';
import './About.css';

const About = () => {
  

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Head Baker',
      bio: 'With 10+ years of baking experience, Sarah creates our signature recipes with love and precision.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Pastry Chef',
      bio: 'Michael brings innovative flavor combinations and artistic presentation to our cookie collection.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      role: 'Customer Experience',
      bio: 'Emma ensures every customer interaction is as sweet as our cookies, with top-notch service.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
    }
  ];

  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">Baking happiness since 2025</p>
      </section>

     

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              <div className="social-links">
                <span className="social-icon">📱</span>
                <span className="social-icon">✉️</span>
                <span className="social-icon">🔗</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;