import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import Filter from "../components/filter";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getAllProducts())
      .unwrap()
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <section>
      <div className="container mx-auto flex gap-7">
        <div className="w-[30%] ">
          <Filter />
        </div>

        <div>
          <h1 className="text-3xl font-semibold ml-3">Products</h1>
          <div className="grid grid-cols-4 gap-2">
            {products.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
