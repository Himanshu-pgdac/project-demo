import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';
import Register from "./pages/Register";
import Checkout from "./pages/Checkout"; // Updated import path
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { CartProvider, useCart } from './CartContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import './App.css';

// ProtectedRoute component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// CartProtectedRoute component
const CartProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { cartItems } = useCart();

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (cartItems.length === 0) return <Navigate to="/menu" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />
                
                <Route 
                  path="/checkout" 
                  element={
                    <CartProtectedRoute>
                      <Checkout />
                    </CartProtectedRoute>
                  } 
                />
                
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;