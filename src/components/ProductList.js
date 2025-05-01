// // src/components/ProductList.js
// import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import SearchBar from './SearchBar';
// import FilterSort from './FilterSort';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [displayedProducts, setDisplayedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setDisplayedProducts(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Error fetching products:', err);
//         setError(true);
//         setLoading(false);
//       });
//   }, []);

//   const handleSearch = (query) => {
//     const filtered = products.filter(product =>
//       product.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setDisplayedProducts(filtered);
//   };

//   const handleSort = (order) => {
//     const sorted = [...displayedProducts].sort((a, b) =>
//       order === 'asc' ? a.price - b.price : b.price - a.price
//     );
//     setDisplayedProducts(sorted);
//   };

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error loading products.</p>;

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       <FilterSort onSort={handleSort} />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {displayedProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterSort from "./FilterSort";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
        setDisplayedProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Search
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter
    if (filterCategory !== "all") {
      filtered = filtered.filter((product) => product.category === filterCategory);
    }

    // Sort
    switch (sortOption) {
      case "priceLowHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }

    setDisplayedProducts(filtered);
  }, [searchTerm, filterCategory, sortOption, products]);

  if (loading) return <div className="text-center py-10 text-xl">Loading products...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterSort
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>

      {displayedProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
