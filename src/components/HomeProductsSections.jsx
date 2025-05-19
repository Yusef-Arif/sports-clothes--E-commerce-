import { useDispatch } from "react-redux";
import Button from "./Button";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getFilterProducts } from "../api/products";
import useNavigateWithScroll from "../hooks/useNavigateWithScroll";

const HomeProductsSections = ({ section, query }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigateWithScroll();

  useEffect(() => {
    dispatch(getFilterProducts(query))
      .unwrap()
      .then((products) => setProducts(products))
      .catch((error) => {
        console.error("some thing went wrong:", error);
      });
  }, [dispatch, query]);

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center my-10">{section}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2">
          {products.map((item) => (
            <div
              key={item.id}
              className="p-4"
              onClick={() => navigate(`/products/${item.id}`)}
            >
              <ProductCard product={item} />
            </div>
          ))}
        </div>
        <div
          className="flex justify-center items-center mt-10"
          onClick={() => navigate("/products")}
        >
          <Button text="View All" />
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSections;
