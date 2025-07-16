import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductCard = ({ product, currency }) => {
    const { addToCart, addToWishlist } = useContext(ShopContext);
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-65 object-cover"
      />
      <div className="p-4 ">
        <h3 className="text-xl font-semibold text-fontGreen">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-3 font-semibold text-yarnGreen text-lg">
          {currency} {product.price}
        </div>
        <div className="mt-4 flex gap-2 ">
        <button className=" w-1/2 py-2 bg-yarnGreen text-white rounded-md hover:bg-green-700 transition" onClick={()=>addToCart(product)}>Add to Cart</button>
        <Link to={`/product/${product.id}`} className="flex-1">
        <button className="w-full py-2 bg-yarnGreen text-white rounded-md hover:bg-green-700 transition">View More</button>
        </Link>
        </div>
    
      </div>
    </div>
  )
}

export default ProductCard
