import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 100000 },
  { id: 2, name: "Smartphone", price: 200000 },
  { id: 3, name: "Headphones", price: 5000 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - Rs.{product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
