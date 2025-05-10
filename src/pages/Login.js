import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaApple, FaEnvelope, FaLock } from "react-icons/fa";
import "./Auth.css";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      // Replace with your actual authentication logic
      await login(); // This sets isAuthenticated to true in context
      navigate("/menu"); // Redirect to menu after successful login
    } catch (err) {
      setError("Failed to log in: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-split-container">
      {/* Image Side */}
      <div className="auth-image-side">
        <div className="auth-image-content">
          <h2 className="auth-image-title">Welcome Back!</h2>
          <p className="auth-image-text">Sign in to access your sweet cookie recipes and favorites</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="auth-card-side">
        <div className="auth-card">
          <h1 className="auth-title">Login</h1>
          {error && <div className="auth-error">{error}</div>}
          <form className="auth-form" onSubmit={handleLogin}>
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
                placeholder="Enter your password"
                required
              />
              <FaLock className="input-icon" />
            </div>

            <button 
              type="submit" 
              className="auth-button"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="auth-link-container">
              <Link to="/forgot-password" className="auth-link">
                Forgot password?
              </Link>
            </div>

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
              Don't have an account?{" "}
              <Link to="/register" className="auth-link">
                Register here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;