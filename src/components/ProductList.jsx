import React, { useState } from "react";
import laptopImage from '../assets/laptop.jpeg';
import smartPhoneImage from '../assets/smart.jpg';
import headPhoneImage from '../assets/head.jpg';

const productsData = [
  { id: 1, name: "Laptop", price: 100000, imageUrl: laptopImage },
  { id: 2, name: "Smartphone", price: 200000, imageUrl: smartPhoneImage },
  { id: 3, name: "Headphones", price: 5000, imageUrl: headPhoneImage },
];

const ProductList = ({ addToCart }) => {
  const [productQuantities, setProductQuantities] = useState({});
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [products, setProducts] = useState(productsData); // State for products list

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Available Products</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "80%",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li
              key={product.id}
              style={{
                margin: "20px 0",
                paddingLeft: "250px",
                paddingBottom: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <h3>{product.name}</h3>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "100px", height: "100px" }}
              />
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
          ))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
