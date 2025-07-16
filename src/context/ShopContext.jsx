import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [currencySymbol, setCurrencySymbol] = useState("₹");

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems((prev) => {
      if (!prev.includes(productId)) return [...prev, productId];
      return prev;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((id) => id !== productId));
  };

  const addToWishlist = (productId) => {
    setWishlistItems((prev) => {
      if (!prev.includes(productId)) return [...prev, productId];
      return prev;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((id) => id !== productId));
  };

  return (
    <ShopContext.Provider
      value={{
        currencySymbol,
        setCurrencySymbol,
        cartItems,
        addToCart,
        removeFromCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};