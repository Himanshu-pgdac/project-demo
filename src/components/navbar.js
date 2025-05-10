import { Link } from 'react-router-dom';
import './Navbar.css';
import {
  FaShoppingBag,
  FaHome,
  FaUtensils,
  FaInfoCircle,
  FaSignInAlt,
  FaUserPlus,
  FaTimes,
  FaSignOutAlt,
} from 'react-icons/fa';
import Search from './Search';
import { useState } from 'react';
import { useCart } from '../CartContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <header className="navbar">
      <nav className="nav-container">
        {/* Left: Logo */}
        <div className="nav-logo">
          <img
            src="https://krispykremesa.com/wp-content/uploads/2025/04/krispy-kreme_craving-cookies-lto_mobile-homepage-banner.jpg"
            alt="Logo"
            className="logo-img"
          />
          <span className="logo-text">COOKIE CRAVINGS</span>
        </div>

        {/* Center: Navigation Links with Icons */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            <FaHome className="nav-icon" />
            <span>Home</span>
          </Link>

          <Link to="/menu" className="nav-link">
            <FaUtensils className="nav-icon" />
            <span>Menu</span>
          </Link>

          <Link to="/about" className="nav-link">
            <FaInfoCircle className="nav-icon" />
            <span>About</span>
          </Link>

          {/* Authentication Links - Conditionally Rendered */}
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="nav-link">
                <FaSignInAlt className="nav-icon" />
                <span>Login</span>
              </Link>
              <Link to="/register" className="nav-link">
                <FaUserPlus className="nav-icon" />
                <span>Register</span>
              </Link>
            </>
          ) : (
            <Link to="/" className="nav-link" onClick={logout}>
              <FaSignOutAlt className="nav-icon" />
              <span>Logout</span>
            </Link>

          )}
        </div>

        {/* Right: Search + Cart (only shown when authenticated) */}
        <div className="nav-icons">
          <Search className="search-icon" />

          {isAuthenticated && (
            <div className="cart-icon-container">
              <FaShoppingBag
                className="icon cart-icon"
                onClick={() => setIsCartOpen(!isCartOpen)}
              />
              {cartItems.length > 0 && (
                <span className="cart-badge">{cartItems.length}</span>
              )}

              {/* Cart Dropdown */}
              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="cart-header">
                    <h3>Your Cart ({cartItems.length})</h3>
                    <FaTimes
                      className="close-cart"
                      onClick={() => setIsCartOpen(false)}
                    />
                  </div>

                  {cartItems.length === 0 ? (
                    <p className="empty-cart">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="cart-items">
                        {cartItems.map((item) => (
                          <div key={item.id} className="cart-item">
                            <img
                              src={item.image}
                              alt={item.name}
                              width="40"
                              height="40"
                              className="cart-item-image"
                            />
                            <div className="item-info">
                              <span className="item-name">{item.name}</span>
                              <span className="item-price">
                                ${item.price.toFixed(2)}
                              </span>
                            </div>
                            <button
                              className="remove-item"
                              onClick={() => removeFromCart(item.id)}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="cart-footer">
                        <div className="cart-total">
                          <span>Total:</span>
                          <span>${total.toFixed(2)}</span>
                        </div>
                        <Link to="/checkout" className="checkout-btn">
                          Proceed to Checkout
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;