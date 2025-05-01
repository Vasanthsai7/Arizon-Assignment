import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        const updatedCart = state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cartItems: updatedCart };
      } else {
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      const updatedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, cartItems: updatedCartItems };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
