import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { products } from '../Data/Product'; 


const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { addToWishlist } = useContext(ShopContext);
  const product = products.find((item) => item.id.toString() === id);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants?.[0] || ""
  );

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-30 md">
      <div className="flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded-lg shadow" />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-xl text-gray-600 mb-4">₹{product.price}</p>
          <p className="text-md text-gray-800 mb-6">{product.description}</p>

          {product.variants > 0 && (
        <div className="mt-4 mb-4">
          <label htmlFor="variant" className="block text-md mb-2 font-medium">
            Choose Variant:
          </label>
          <select
            id="variant"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            {product.variants.map((variant, index) => (
              <option key={index} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
      )}
                <div className='flex flex-row gap-2'>
          <button className="px-6 py-2 bg-yarnGreen text-white rounded-md hover:bg-green-700 transition">
            Add to Cart
          </button>
          <button
  onClick={() => {
    addToWishlist({ ...product, variant: selectedVariant });
    navigate('/wishlist');
  }}
  className="px-10 py-2 bg-[maroon] text-white rounded-md hover:bg-red-700 transition"
>
  Wishlist 🤍
</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;