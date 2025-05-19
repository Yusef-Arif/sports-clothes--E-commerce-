import { useEffect, useState } from "react";
import Button from "../components/Button";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const Total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartItems);
  }, []);
  const handleDelete = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };
  return (
    <section className="min-h-[105vh] mb-[10%] bg-graybg mt-5 max-sm:p-5">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold my-5">Your Cart</h1>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Cart Items */}
          <div className="w-full lg:min-w-[60%] bg-white shadow-md rounded-lg p-5">
            {cartItems?.length === 0 ? (
              <div className="flex justify-center items-center h-[50vh]">
                <h1 className="text-2xl font-bold text-gray-500">
                  Your cart is empty
                </h1>
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {cartItems?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row justify-start items-center border-b-2 border-b-gray-300 pb-3 gap-5 relative"
                  >
                    <div
                      className="absolute top-2 right-2"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="fa-solid fa-trash text-red-400 text-xl cursor-pointer"></i>
                    </div>
                    <div className="w-[100px] h-[100px] rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.images}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-center sm:items-start">
                      <h1 className="text-2xl font-bold">{item.title}</h1>
                      <p>Size: {item.size}</p>
                      <p>Amount: {item.amount}</p>
                      <h1 className="text-2xl font-semibold">${item.price}</h1>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Order Summary */}
          <div className="w-full lg:min-w-[35%] shadow-md rounded-lg p-5 bg-white h-fit">
            <h1 className="text-2xl font-bold mb-3">Order Summary</h1>
            <div className="flex flex-col gap-3 border-b-2 border-b-gray-300 pb-3">
              <p className="flex justify-between text-gray-500">
                <span>subtotal</span> <span>${Total}</span>
              </p>
              <p className="flex justify-between text-gray-500">
                <span>Discount (-20%)</span>
                <span className="text-red-400">
                  - ${(Total * (20 / 100)).toFixed(2)}
                </span>
              </p>
              <p className="flex justify-between text-gray-500">
                <span>Delivery</span> <span>$15</span>
              </p>
            </div>
            <div>
              <p className="flex justify-between text-xl font-semibold mt-2">
                <span>Total</span>
                <span>${(Total - Total * (20 / 100) + 15).toFixed(2)}</span>
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 mt-5">
                <div className="flex justify-between items-center bg-graybg rounded-xl p-5 gap-2 w-full sm:w-auto">
                  <i className="fa-solid fa-tag"></i>
                  <input
                    type="text"
                    placeholder="Enter promo"
                    className="outline-none bg-graybg w-full"
                  />
                </div>
                <Button text="Apply" color="black" />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <Button text="Checkout" color="black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
