import React, { createContext, useState } from 'react';


export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {

  const [currencySymbol, setCurrencySymbol] = useState("₹");

  return (
    <ShopContext.Provider value={{ currencySymbol, setCurrencySymbol }}>
      {children}
    </ShopContext.Provider>
  );
};