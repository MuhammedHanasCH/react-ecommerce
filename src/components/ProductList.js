import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductList.css'; 
import { Link } from 'react-router-dom'; // Import Link

const ProductList = () => {
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data); 
        setLoading(false);  
      })
      .catch(error => {
        setError('Failed to fetch products');  
        setLoading(false);  
      });
  }, []);  

  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>;  
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="btn btn-primary btn-sm">View Product</Link> {/* Link to Product Details */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
