import React, { createContext, useContext, useReducer } from 'react';

// Create a context
const CartContext = createContext();

// Create a CartProvider to wrap your app with
 const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload.productId),
        };
  
      default:
        return state;
    }
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, cartItems: [...state.cartItems, action.payload] };
        case 'REMOVE_FROM_CART':
          return {
            ...state,
            cartItems: state.cartItems.filter(item => item.id !== action.payload.productId),
          };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to access the cart state and dispatch function
 const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };