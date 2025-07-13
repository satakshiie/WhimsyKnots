import React, { createContext, useState } from 'react';

// Create context
export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  // You can later make this dynamic if you support multiple currencies
  const [currencySymbol, setCurrencySymbol] = useState("₹");

  return (
    <ShopContext.Provider value={{ currencySymbol, setCurrencySymbol }}>
      {children}
    </ShopContext.Provider>
  );
};