import React, { useState } from "react";

// Cart Component
const Cart = ({ cartItems, removeFromCart, clearCart }) => {
  const [discount, setDiscount] = useState(0);
  const [discountCodeApplied, setDiscountCodeApplied] = useState(false);
  const [discountCode, setDiscountCode] = useState(""); // State to hold the discount code

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

  // Handle removal of items
  const handleRemove = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item, false); // Reduce quantity by 1
    } else {
      removeFromCart(item, true); // Remove item completely
    }
  };

  // Handle checkout process
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add items before checkout.");
      return;
    }

    const finalPrice = discountCodeApplied ? discountedTotal : totalPrice;
    alert(`Checkout successful! Total: Rs. ${finalPrice}`);

    // Clear the cart and reset the discount code after checkout
    clearCart();
    setDiscountCode(""); // Clear the discount code after checkout
    setDiscount(0); // Reset discount to 0
    setDiscountCodeApplied(false); // Reset the discount applied flag
  };

  // Apply discount to the total price
  const applyDiscount = (code) => {
    if (code === 'SAVE10') {
      setDiscount(10); // Set discount to 10%
      setDiscountCodeApplied(true); // Mark the discount code as applied
    } else {
      setDiscount(0); // No discount if invalid code
      setDiscountCodeApplied(false); // Reset the discount applied flag
      alert("Invalid discount code");
    }
  };

  // Calculate discounted total price
  const discountedTotal = totalPrice - (totalPrice * discount) / 100;

  // Handle discount code submission
  const handleApplyDiscount = () => {
    applyDiscount(discountCode);
  };

  return (
    <div className="cart" style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {groupedItems.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "15px",
                  padding: "10px",
                  borderBottom: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>{item.name}</strong> <br />
                  Rs. {item.price} x {item.quantity} <br />
                  <span style={{ fontWeight: "bold", color: "#555" }}>
                    Total: Rs. {item.price * item.quantity}
                  </span>
                </div>
                <button
                  onClick={() => handleRemove(item)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price and Checkout Button */}
          <div style={{ marginTop: "20px", textAlign: "right" }}>
            <h3>
              Total: {discountCodeApplied ? (
                <>
                  <span style={{ textDecoration: "line-through", color: "#888" }}>Rs. {totalPrice}</span> {" "}
                  <span style={{ color: "#28a745" }}>Rs. {discountedTotal}</span>
                </>
              ) : (
                `Rs. ${totalPrice}`
              )}
            </h3>

            <div>
              <input
                type="text"
                placeholder="Discount code"
                value={discountCode} // Bind the input value to state
                onChange={(e) => setDiscountCode(e.target.value)} // Update state on change
              />
              <button
                onClick={handleApplyDiscount} // Call function on button click
                style={{
                  marginLeft: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Enter
              </button>
            </div>

            <button
              onClick={handleCheckout}
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
