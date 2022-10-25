import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);



  return (
    <CartContext.Provider value={{ products }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
