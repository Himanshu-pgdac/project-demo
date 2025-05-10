import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  // Sample featured products data
  const featuredCookies = [
    {
      id: 1,
      name: "Chocolate Chip Deluxe",
      description: "Loaded with premium chocolate chunks",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35"
    },
    {
      id: 2,
      name: "Red Velvet Crinkle",
      description: "Festive red cookies with cream cheese filling",
      price: "$14.99",
      image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145"
    },
    {
      id: 3,
      name: "Salted Caramel",
      description: "Buttery cookie with gooey caramel center",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="home-heading">Welcome to Cookie Cravings</h1>
          <p className="hero-subtext">Artisanal cookies baked with love and premium ingredients</p>
          {!isAuthenticated && (
            <Link to="/login" className="cta-button">
              Shop Now
            </Link>
          )}
          {isAuthenticated && (
            <Link to="/menu" className="cta-button">
              Browse Menu
            </Link>
          )}
        </div>
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35"
            alt="Assortment of delicious cookies"
            className="hero-image"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <h2 className="section-title">Our Signature Creations</h2>
        <div className="cookie-grid">
          {featuredCookies.map(cookie => (
            <div key={cookie.id} className="cookie-card">
              <img src={cookie.image} alt={cookie.name} className="cookie-image" />
              <h3>{cookie.name}</h3>
              <p>{cookie.description}</p>
              <span className="price">{cookie.price}</span>
              {isAuthenticated && (
                <button className="add-to-cart">Add to Cart</button>
              )}
              {!isAuthenticated && (
                <Link to="/login" className="add-to-cart login-prompt">
                  Login to Order
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"The best cookies I've ever had! Worth every penny."</p>
            <span>- Sarah J.</span>
          </div>
          <div className="testimonial">
            <p>"My kids go crazy for these cookies. We order weekly!"</p>
            <span>- Michael T.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;