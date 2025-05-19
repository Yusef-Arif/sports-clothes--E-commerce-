import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedProducts } from "../api/products";
import useNavigateWithScroll from "../hooks/useNavigateWithScroll";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const navigate = useNavigateWithScroll();

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue]);

  // API Call when debouncedValue changes
  useEffect(() => {
    if (debouncedValue.length > 0) {
      dispatch(searchedProducts(debouncedValue.toLowerCase()))
        .unwrap()
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => console.log(err));
    } else {
      setProducts([]);
    }
  }, [dispatch, debouncedValue]);

  return (
    <div className="flex items-center gap-2 bg-graybg p-3 rounded-xl relative">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        type="text"
        className="border-none outline-none pr-6"
        placeholder="Search for products..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {debouncedValue.length > 0 && products.length === 0 && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
          <p className="text-center text-gray-500">No products found</p>
        </div>
      )}
      {products.length > 0 && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-2 border-b cursor-pointer"
              onClick={() => {setSearchValue('');navigate(`/products/${product.id}`)}}
            >
              <h1 className="text-lg font-bold">{product.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
