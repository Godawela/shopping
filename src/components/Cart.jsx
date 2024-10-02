import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
