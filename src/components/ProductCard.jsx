import React from 'react'

const ProductCard = ({ product, currency }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-65 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-fontGreen">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-3 font-semibold text-yarnGreen text-lg">
          {currency} {product.price}
        </div>
        <button className="mt-4 w-full py-2 bg-yarnGreen text-white rounded-md hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
