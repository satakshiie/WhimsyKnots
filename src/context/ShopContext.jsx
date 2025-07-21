import React, { createContext, useState } from 'react';

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [currencySymbol, setCurrencySymbol] = useState("₹");

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product, selectedVariant = null) => {

    if (product.variants?.length > 0 && !selectedVariant) {
      alert("Please select a variant before adding to cart.");
      return;
    }
  
    setCartItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          (product.variants?.length > 0 ? item.variant === selectedVariant : true)
      );
  
      if (existing) {

        return prev.map((item) =>
          item.id === product.id &&
          (product.variants?.length > 0 ? item.variant === selectedVariant : true)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
  
        const newItem = {
          ...product,
          quantity: 1,
          ...(selectedVariant && { variant: selectedVariant }),
        };
        return [...prev, newItem];
      }
    });
  }; 
  const removeFromCart = (productId) => {
  setCartItems((prev) => prev.filter((item) => item.id !== productId));
};

const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === product.id &&
          (product.variant ? item.variant === product.variant : true)
      );
      if (!exists) return [...prev, product];
      return prev;
    });
  };
  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((id) => id !== productId));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
 
  const  clearCart = () => {
    setCartItems([]);
  }

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
        getCartTotal,
        clearCart
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};