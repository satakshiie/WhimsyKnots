import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { products } from "../Data/Product";
import { FiTrash2 } from "react-icons/fi";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useContext(ShopContext);

  const getProductDetails = (id) => products.find((p) => p.id === id);

  return (
    <div className="p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlistItems.map((item) => {
          const product = getProductDetails(item.id);
          if (!product) return null;

          return (
            <div key={item.id} className="mb-4 border-b pb-4 flex items-center gap-4">
              <img className="w-20 rounded" src={product.image} alt={product.name} />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                {item.variant && <p className="text-sm text-gray-500">Variant: {item.variant}</p>}
                <p className="text-gray-700">₹{product.price}</p>
              </div>
              <button
                onClick={() => addToCart(product, item.variant)}
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="text-red-600 hover:text-red-800 text-2xl"
              >
                <FiTrash2 />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Wishlist;