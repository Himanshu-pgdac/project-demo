import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple, FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import "./Auth.css";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      // Replace with your actual registration logic
      // After successful registration:
      await login(); // Automatically log the user in after registration
      navigate("/menu"); // Redirect to menu page
    } catch (err) {
      setError("Failed to create account: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-split-container">
      {/* Image Side */}
      <div className="auth-image-side">
        <div className="auth-image-content">
          <h2 className="auth-image-title">Join Our Cookie Community!</h2>
          <p className="auth-image-text">Create an account to save your favorite recipes and preferences</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="auth-card-side">
        <div className="auth-card">
          <h1 className="auth-title">Register</h1>
          {error && <div className="auth-error">{error}</div>}
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
              <FaUser className="input-icon" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <FaEnvelope className="input-icon" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
              />
              <FaLock className="input-icon" />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
              <FaLock className="input-icon" />
            </div>

            <div className="password-requirements">
              <p>Password must contain:</p>
              <ul>
                <li>At least 8 characters</li>
                <li>One uppercase letter</li>
                <li>One number</li>
                <li>One special character</li>
              </ul>
            </div>

            <button 
              type="submit" 
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Social Login */}
            <div className="social-auth">
              <div className="social-title">OR</div>
              <div className="social-buttons">
                <button type="button" className="social-button">
                  <FaGoogle />
                </button>
                <button type="button" className="social-button">
                  <FaFacebook />
                </button>
                <button type="button" className="social-button">
                  <FaApple />
                </button>
              </div>
            </div>

            <div className="auth-link-container">
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;