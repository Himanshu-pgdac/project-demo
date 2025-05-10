// components/Cart/Cart.js
import React, { useState } from 'react';
import './Cart.css';
import CartItem from './CartItem';

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => setIsOpen(!isOpen);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <button className="cart-icon" onClick={toggleCart}>
        🛒 {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </button>
      
      {isOpen && (
        <div className="cart-dropdown">
          <h3>Your Cart</h3>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} onRemove={removeFromCart} />
              ))}
              <div className="cart-total">
                <strong>Total: ${total.toFixed(2)}</strong>
              </div>
              <button className="checkout-btn">Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;