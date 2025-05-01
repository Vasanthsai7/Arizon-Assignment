// src/components/ProductCard.js
import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="border p-4 rounded shadow-md dark:bg-gray-700">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4"
      />
      <h4 className="font-semibold">{product.title}</h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        ${product.price}
      </p>
      <button
        onClick={addToCart}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
