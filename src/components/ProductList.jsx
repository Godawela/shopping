import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 100000 },
  { id: 2, name: "Smartphone", price: 200000 },
  { id: 3, name: "Headphones", price: 5000 },
];

const ProductList = ({ addToCart }) => {
  const [productQuantities, setProductQuantities] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              margin: "20px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: Rs. {product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                padding: "10px 15px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
