import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ProductList from './components/ProductList'; 
import ProductDetail from './components/ProductDetail'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Add this route */}
      </Routes>
    </Router>
  );
};

export default App;
