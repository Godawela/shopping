import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Add item to cart
  const addToCart = (product) => {
    setLoading(true);
    setTimeout(() => {
      setCartItems([...cartItems, product]);
      setLoading(false);
    }, 1000);
  };

  // Remove item from cart
  const removeFromCart = (product, isCompleteRemoval) => {
    if (isCompleteRemoval) {
      // Completely remove the item from the cart
      setLoading(true);
    setTimeout(() => {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
      setLoading(false);
    }, 1000);
    } else {
      // Reduce the quantity by one
      const index = cartItems.findIndex((cartItem) => cartItem.id === product.id);
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1); // Remove one instance of the item
      setCartItems(updatedCart);
    }
  };

  return (
    <div className="app">
      {loading && (
        <div className="loading-overlay">
          <div className="loading-message">Loading...</div>
        </div>
      )}
      <Header />
      <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
        <ProductList addToCart={addToCart} />
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </div>

      
    </div>
  );
};

export default App;
