import  { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { products } from "../Data/Product"; 
import { FiTrash2 } from "react-icons/fi"; 
import CartTotal from "../components/CartTotal";
import { Link } from 'react-router-dom';



const Cart = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  const getProductDetails = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 mt-20">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item) => {
          const product = getProductDetails(item.id);
          if (!product) return null;

          return (
            <div key={item.id} className="mb-4 border-b pb-4 flex item-center gap-4">
                <img className="w-20 sm:w-15 lg:w-30 rounded-sm" src={product.image} alt="" />
                <div className="flex-1 mb-10">
              <h3 className=" sm:text-md lg:text-xl font-semibold mt-12">{product.name}</h3>
              {item.variant && (
              <p className="text-sm text-gray-500">Variant: {item.variant}</p>)}
              <p className="text-gray-700 ">
                ₹{product.price} × {item.quantity} = ₹{product.price * item.quantity}
              </p>
              </div>
              <button
               onClick={() => removeFromCart(item.id)}
               className="mt-2 text-red-600 hover:text-red-800 transition text-2xl"
                title="Remove item"
               >
               <FiTrash2 />
            </button>
            </div>
          );
          })
      )}
      <div className="w-full px-6 mt-6 border-t pt-4">
          <h2 className="text-lg font-semibold text-fontGreen mb-2">Total</h2>
          <CartTotal />
        </div>

     <Link to="/placeorder">
        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Proceed to Checkout
       </button>
      </Link>
        
    </div>
  );
};

export default Cart;