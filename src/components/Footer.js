import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const socialLinks = [
    { name: 'facebook', url: '#', icon: 'fab fa-facebook' },
    { name: 'instagram', url: '#', icon: 'fab fa-instagram' },
    { name: 'twitter', url: '#', icon: 'fab fa-twitter' },
  ];

  return (
    <footer className={`site-footer ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; {currentYear} Cookie Cravings</p>
        </div>
        
        <div className="footer-links">
          <a href="#">Privacy</a>
          <span className="divider">|</span>
          <a href="#">Terms</a>
          <span className="divider">|</span>
          <a href="#">Contact</a>
        </div>
        
        <div className="social-links">
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              aria-label={link.name}
              className="social-icon"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;