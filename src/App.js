import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove item from cart
  const removeFromCart = (product, isCompleteRemoval) => {
    if (isCompleteRemoval) {
      // Completely remove the item from the cart
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
    } else {
      // Reduce the quantity by one
      const index = cartItems.findIndex((cartItem) => cartItem.id === product.id);
      const updatedCart = [...cartItems];
      updatedCart.splice(index, 1); // Remove one instance of the item
      setCartItems(updatedCart);
    }
  };

  return (
    
    <div className="app" style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <Header />
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};


export default App;
