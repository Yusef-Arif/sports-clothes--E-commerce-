import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../api/products";

const Filter = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);
  console.log(categories);
  useEffect(() => {
    dispatch(getAllCategories())
      .unwrap()
      .catch((err) => console.log(err));
  }, [dispatch]);
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Filters</h1>
        <i class="fa-solid fa-filter"></i>
      </div>
      <div className="flex flex-col gap-4 my-3">
        <div>
          <h2 className="text-xl font-semibold mb-3">Price</h2>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Categiory</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((categiory) => (
              <div key={categiory.id}>
                <button className="cursor-pointer p-2 rounded-3xl bg-graybg hover:bg-main hover:text-white transition-all duration-300">
                  {categiory.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
