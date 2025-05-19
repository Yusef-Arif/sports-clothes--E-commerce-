import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedProducts } from "../../api/products";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const dispatch = useDispatch();

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
      dispatch(searchedProducts(`${debouncedValue.toLowerCase()}`))
        .unwrap()
        .catch((err) => console.log(err));
    }else {
      dispatch(searchedProducts(""));
    }
  }, [dispatch, debouncedValue]);
  return (
    <div>
      <div className="flex items-center gap-2 bg-graybg p-3 rounded-xl">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="border-none outline-none pr-6"
          placeholder="Search for products..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
