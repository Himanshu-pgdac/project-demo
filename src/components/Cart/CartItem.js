// components/Cart/CartItem.js
import React from 'react';

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">${item.price.toFixed(2)}</span>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        ×
      </button>
    </div>
  );
}

export default CartItem;