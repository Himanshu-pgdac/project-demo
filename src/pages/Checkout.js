import { useCart } from '../CartContext';
import { FaLock, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, removeFromCart } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-grid">
        {/* Cart Items Section */}
        <div className="cart-section">
          <h2>Your Order ({cartItems.length} items)</h2>
          <div className="checkout-items">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-item">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>${item.price.toFixed(2)}</span>
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
          <div className="checkout-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment-section">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <div className="payment-method">
              <input type="radio" id="credit" name="payment" defaultChecked />
              <label htmlFor="credit">
                <FaCcVisa className="payment-icon" />
                <FaCcMastercard className="payment-icon" />
                Credit/Debit Card
              </label>
            </div>
            <div className="payment-method">
              <input type="radio" id="paypal" name="payment" />
              <label htmlFor="paypal">
                <FaCcPaypal className="payment-icon" />
                PayPal
              </label>
            </div>
          </div>

          {/* Payment Form */}
          <form className="payment-form">
            <div className="form-group">
              <label>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
            <button type="submit" className="pay-now-btn">
              <FaLock /> Pay ${total.toFixed(2)}
            </button>
          </form>

          <div className="secure-payment">
            <FaLock /> Secure SSL Encryption
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;