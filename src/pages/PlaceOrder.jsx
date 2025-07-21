// src/pages/PlaceOrder.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { products } from "../Data/Product";

const PlaceOrder = () => {
  const { cartItems, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const getProductDetails = (id) => products.find((p) => p.id === id);

  const handlePlaceOrder = () => {
    alert("Your order has been placed!");
    clearCart(); // Clear cart after placing order
    navigate("/"); // Redirect to homepage or orders page
  };

  return (
    <div className="p-6 max-w-6xl mt-20 mx-auto">
  <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>

  {cartItems.length === 0 ? (
    <p>Your cart is empty.</p>
  ) : (
    <div className="flex flex-col md:flex-row gap-8">
      
      {/* LEFT: Order Summary */}
      <div className="md:w-2/3">
        {cartItems.map((item, idx) => {
          const product = getProductDetails(item.id);
          if (!product) return null;

          return (
            <div key={idx} className="border-b py-4">
              <h3 className="font-semibold">{product.name}</h3>
              {item.variant && (
                <p className="text-sm text-gray-500">Variant: {item.variant}</p>
              )}
              <p>
                ₹{product.price} × {item.quantity} = ₹
                {product.price * item.quantity}
              </p>
            </div>
          );
        })}

        <button
          onClick={handlePlaceOrder}
          className="mt-6 bg-yarnGreen text-white py-2 px-6 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>

      {/* RIGHT: Shipping Info */}
      <div className="md:w-1/3 w-full bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Full Name" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="Address" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="City" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="Pincode" className="border px-4 py-2 rounded" required />
          <input type="text" placeholder="Phone Number" className="border px-4 py-2 rounded" required />
        </form>
      </div>
    </div>
  )}
</div>
  );
};

export default PlaceOrder;