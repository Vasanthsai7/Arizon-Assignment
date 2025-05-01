// src/pages/ProductListingPage.js
import React from 'react';
import ProductList from '../components/ProductList';

const ProductListingPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <ProductList />
    </div>
  );
};

export default ProductListingPage;
