import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../api/products";

const Filter = ({
  setCategoryID,
  catigoryID,
  handleSubmit,
  setMinPrice,
  setMaxPrice,
}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllCategories())
      .unwrap()
      .catch((err) => console.log(err));
  }, [dispatch]);

  const handleCategory = (id) => {
    if (catigoryID === id) {
      setCategoryID(null);
    } else {
      setCategoryID(id);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Filters</h1>
        <i className="fa-solid fa-filter"></i>
      </div>

      <div className="flex flex-col gap-4 my-3">
        <div>
          <h2 className="text-xl font-semibold mb-3">Price</h2>

          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              className="border border-graybg rounded-lg p-2 w-full"
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Max"
              className="border border-graybg rounded-lg p-2 w-full"
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass cursor-pointer"></i>
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((categiory) => (
              <button
                key={categiory.id}
                onClick={() => handleCategory(categiory.id)}
                className={`cursor-pointer p-2 rounded-3xl bg-graybg hover:bg-main hover:text-white transition-all duration-300 ${
                  catigoryID === categiory.id ? "bg-main text-white" : ""
                }`}
              >
                {categiory.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
