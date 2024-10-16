import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 100000 },
  { id: 2, name: "Smartphone", price: 200000 },
  { id: 3, name: "Headphones", price: 5000 },
];

const ProductList = ({ addToCart }) => {
  const [addedProducts, setAddedProducts] = useState([]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProducts([...addedProducts, product.id]);
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
              disabled={addedProducts.includes(product.id)}
              style={{
                padding: "10px 15px",
                backgroundColor: addedProducts.includes(product.id)
                  ? "#ccc"
                  : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: addedProducts.includes(product.id) ? "not-allowed" : "pointer",
              }}
            >
              {addedProducts.includes(product.id) ? "Added" : "Add to Cart"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
