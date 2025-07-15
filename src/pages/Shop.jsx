import React , {useContext} from 'react';
import {products} from '../Data/Product'; 
import { ShopContext } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

  
const Shop = () => {
    const { currency } = useContext(ShopContext);
  return (
        <section className="min-h-screen bg-[#FFFBDD] py-20 px-4 md:px-16">
          <h2 className="text-4xl font-[Playfair] text-fontGreen mb-15 mt-10 text-center">Shop All</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15">
            {products.map((products) => (
              <ProductCard key={products.id} product={products} currency={currency} />
            ))}
          </div>
        </section>
  );
};

export default Shop;