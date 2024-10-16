import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  // Group items by id and count occurrences
  const groupedItems = cartItems.reduce((acc, item) => {
    const foundItem = acc.find((i) => i.id === item.id);
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <div className="cart" style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {groupedItems.map(item => (
            <li
              key={item.id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                borderBottom: "1px solid #ccc",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <strong>{item.name}</strong> <br />
                Rs. {item.price} x {item.quantity} <br />
                <span style={{ fontWeight: "bold", color: "#555" }}>Total: Rs. {item.price * item.quantity}</span>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <h3>Total: Rs. {totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
