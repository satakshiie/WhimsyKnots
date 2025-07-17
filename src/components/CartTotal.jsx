import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { products } from "../Data/Product";

const CartTotal = () => {
  const { cartItems } = useContext(ShopContext);

  const getProductDetails = (id) => {
    return products.find((product) => product.id === id);
  };

  const subtotalBreakdown = cartItems.map((item) => {
    const product = getProductDetails(item.id);
    if (!product) return null;

    const itemTotal = product.price * item.quantity;

    return {
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      total: itemTotal,
      variant: item.variant || null,
    };
  }).filter(Boolean); // remove nulls

  const total = subtotalBreakdown.reduce((acc, item) => acc + item.total, 0);

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-lg font-semibold mb-2">Cart Summary</h3>
      <ul className="mb-4 space-y-2">
        {subtotalBreakdown.map((item, index) => (
          <li key={index} className="text-sm text-gray-700">
            {item.name} {item.variant && `(${item.variant})`} — ₹{item.price} × {item.quantity} = <span className="font-medium text-fontGreen">₹{item.total}</span>
          </li>
        ))}
      </ul>
      <div className="font-bold text-lg text-yarnGreen">
        Total: ₹{total}
      </div>
    </div>
  );
};

export default CartTotal;