import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductByID } from "../api/products";
import Rating from "../components/Rating";
import Button from "../components/Button";
import HomeProductsSections from "../components/HomeProductsSections";
import Testemonials from "./Testemonials";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.products);
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("Small");
  const sizes = [{ size: "Small" }, { size: "Medium" }, { size: "Large" }];

  const amountPlus = () => {
    setAmount((prev) => prev + 1);
  };
  const amountMinus = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    dispatch(getProductByID(id))
      .unwrap()
      .catch((err) => console.log(err));
  }, [dispatch, id]);

  const handleCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.amount += amount;
    } else {
      cartItems.push({ ...product, amount, size });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success("Product added to cart");
  };

  return (
    <>
      {isLoading && (
        <div className="absolute top-0 left-0 w-full min-h-[130vh] bg-shadowbg flex items-center justify-center z-50">
          <Spinner size="size-50" />
        </div>
      )}
      <section className="min-h-[110vh]">
        <div className="container mx-auto mt-7 mb-[15%] max-sm:p-5">
          <div className="flex flex-col lg:flex-row gap-7">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex flex-row sm:flex-col gap-4 w-full sm:w-[100px] items-center justify-start">
                <img
                  src={product?.images}
                  alt="product-image"
                  className="rounded-2xl w-20 h-20 object-cover"
                />
                <img
                  src={product?.images}
                  alt="product-image"
                  className="rounded-2xl w-20 h-20 object-cover"
                />
                <img
                  src={product?.images}
                  alt="product-image"
                  className="rounded-2xl w-20 h-20 object-cover"
                />
              </div>
              <div className="w-full sm:w-[300px] md:w-[400px]">
                <img
                  src={product?.images}
                  alt="product-image"
                  className="rounded-2xl w-full object-cover"
                />
              </div>
            </div>
            <div className="flex justify-center items-start flex-col w-full">
              <h1 className="text-main text-2xl sm:text-3xl md:text-4xl font-extrabold">
                {product.title}
              </h1>
              <div className="mt-2 mb-3">
                <Rating rate="3" />
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <p className="text-2xl sm:text-3xl font-bold">
                  ${product.price}
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gray-300 line-through">
                  ${product.price + product.price * (40 / 100)}
                </p>
                <p className="px-2 py-1 text-red-400 bg-red-100 rounded-xl text-sm sm:text-base">
                  -40%
                </p>
              </div>
              <p className="my-5 text-gray-400 text-base sm:text-lg">
                {product.description}
              </p>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold mb-2">Size</h1>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSize(item.size)}
                      className={`cursor-pointer p-2 bg-graybg rounded-lg text-gray-400 hover:bg-main hover:text-white transition-all duration-300 ${
                        size === item.size ? "bg-main text-white" : ""
                      }`}
                    >
                      {item.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-5 w-full">
                <div className="flex gap-2 items-center text-xl sm:text-2xl">
                  <button
                    onClick={amountMinus}
                    className="cursor-pointer text-gray-400 bg-graybg rounded-full p-2"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  {amount}
                  <button
                    onClick={amountPlus}
                    className="cursor-pointer text-gray-400 bg-graybg rounded-full p-2"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <div onClick={handleCart} className="w-full sm:w-auto">
                  <Button text="Add to Cart" color="black" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[5%] mb-[10%]">
            <Testemonials />
          </div>
          <div className="my-[10%]">
            <HomeProductsSections
              section="You might also like"
              query="offset=8&limit=4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
