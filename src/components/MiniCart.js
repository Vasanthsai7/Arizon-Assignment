import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const MiniCart = () => {
  const { state, dispatch } = useCart();
  const [isVisible, setIsVisible] = useState(false);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div
      className={`absolute right-0 mt-2 bg-white p-4 rounded shadow-lg ${isVisible ? 'block' : 'hidden'}`}
      onMouseLeave={() => setIsVisible(false)}
    >
      {state.cart.map(item => (
        <div key={item.id} className="flex justify-between items-center mb-2">
          <img src={item.image} alt={item.title} className="w-12 h-12" />
          <div>
            <p>{item.title}</p>
            <p>Qty: {item.quantity}</p>
          </div>
          <button onClick={() => handleRemove(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      {state.cart.length === 0 && <p>Your cart is empty</p>}
    </div>
  );
};

export default MiniCart;
