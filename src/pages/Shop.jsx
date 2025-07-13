import React from 'react';
import {products} from '../Data/Product'; 

const Shop = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((products) => (
          <div key={products.id} className="border p-4">
            <img src={products.image} alt={products.name} className="w-full h-auto" />
            <h2 className="mt-2 text-lg font-semibold">{products.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;