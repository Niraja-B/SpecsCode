// src/components/Cart.js

import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContext';
import '../styles/Cart.css'; // Ensure you have the styles defined

const Cart = () => {
  const { cart } = useContext(StoreContext);

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      <div className="cart-grid">
        {cart.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Size: {product.size}</p>
            <p>Color: {product.color}</p>
            <p>Shape: {product.shape}</p>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
