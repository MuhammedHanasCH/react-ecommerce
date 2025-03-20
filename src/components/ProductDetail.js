import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const [notification, setNotification] = useState(""); // For showing notification

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log("Error fetching product:", error);
      });
  }, [id]); // Dependency array for useEffect

  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setNotification(`${product.title} added to cart!`); // Set the notification
    setTimeout(() => {
      setNotification(""); // Hide notification after 3 seconds
    }, 3000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>{product.description}</p>
      <p className="price">${product.price}</p>

      {/* Add to Cart Button */}
      <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>

      {/* Show Notification */}
      {notification && <div className="notification">{notification}</div>}

      {/* Back to Products Link */}
      <Link to="/" className="back-button">Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
