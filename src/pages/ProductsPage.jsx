import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getFilterProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import Filter from "../components/filter";
import useNavigateWithScroll from "../hooks/useNavigateWithScroll";
import usePagination from "../hooks/usePagination";
import Spinner from "../components/Spinner";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigateWithScroll();
  const { products, filterProducts, isLoading } = useSelector(
    (state) => state.products
  );
  const { page, limit, offset, nextPage, prevPage } = usePagination(1, 12);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [catigoryID, setCategoryID] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const [isFiltering, setIsFiltering] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  //filter products by category
  useEffect(() => {
    dispatch(getAllProducts());
    if (catigoryID !== null) {
      setIsFiltering(true);
      dispatch(
        getFilterProducts(
          `offset=${offset}&limit=${limit}&categoryId=${catigoryID}`
        )
      )
        .unwrap()
        .catch((err) => console.log(err));
    } else {
      setIsFiltering(false);
      dispatch(getFilterProducts(`offset=${offset}&limit=${limit}`))
        .unwrap()
        .catch((err) => console.log(err));
    }
  }, [dispatch, catigoryID, offset, limit]);

  //filter products by price
  const handleSubmit = (e) => {
    e.preventDefault();

    if (minPrice > maxPrice) {
      alert("Min price should be less than max price");
      return;
    }

    let query = [];

    if (catigoryID !== null) query.push(`categoryId=${catigoryID}`);
    if (minPrice !== null) query.push(`price_min=${minPrice}`);
    if (maxPrice !== null) query.push(`price_max=${maxPrice}`);

    if (query.length > 0) {
      setIsFiltering(true);
      dispatch(getFilterProducts(query.join("&")))
        .unwrap()
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (isFiltering) {
      setNumberOfPages(Math.ceil(filterProducts.length / limit));
    } else {
      setNumberOfPages(Math.ceil(products.length / limit));
    }
  }, [isFiltering, products, filterProducts, limit]);

  return (
    <>
      <section className="min-h-[110vh] mt-7 mb-[15%]">
        <div className="container mx-auto flex flex-col lg:flex-row gap-7">
          <div className="block lg:hidden mb-4">
            <button
              className="flex items-center gap-2 ml-3 bg-main text-white px-4 py-2 rounded-lg"
              onClick={() => setShowMobileFilter(true)}
            >
              <i className="fa-solid fa-filter"></i>
              Filter
            </button>
          </div>
          <div className="hidden lg:block w-full lg:max-w-[20%] mb-6 lg:mb-0">
            <Filter
              catigoryID={catigoryID}
              setCategoryID={setCategoryID}
              handleSubmit={handleSubmit}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          {showMobileFilter && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center lg:hidden">
              <div className="bg-white rounded-2xl p-5 w-[90vw] max-w-sm relative">
                <button
                  className="absolute top-2 right-2 text-gray-500"
                  onClick={() => setShowMobileFilter(false)}
                >
                  <i className="fa-solid fa-xmark fa-xl"></i>
                </button>
                <Filter
                  catigoryID={catigoryID}
                  setCategoryID={setCategoryID}
                  handleSubmit={(e) => {
                    handleSubmit(e);
                    setShowMobileFilter(false);
                  }}
                  setMinPrice={setMinPrice}
                  setMaxPrice={setMaxPrice}
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            <h1 className="text-3xl font-semibold ml-3">Products</h1>
            {isLoading ? (
              <div className="absolute top-0 left-0 w-full min-h-[130vh] bg-shadowbg flex items-center justify-center z-50">
                <Spinner size="size-50" />
              </div>
            ) : filterProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-2">
                {filterProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-[40vh]">
                <p className="text-3xl font-bold text-gray-400">
                  there is no Products
                </p>
              </div>
            )}
            {numberOfPages > 1 && (
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-3">
                <button
                  onClick={prevPage}
                  disabled={page === 1}
                  className="cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-main hover:text-white transition-all duration-300 ease-in-out"
                >
                  Previous
                </button>
                <span className="text-lg font-semibold">
                  Page {page} of {numberOfPages}
                </span>
                <button
                  onClick={nextPage}
                  disabled={
                    isFiltering
                      ? page === Math.ceil(filterProducts.length / limit)
                      : page === Math.ceil(products.length / limit)
                  }
                  className="cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-main hover:text-white transition-all duration-300 ease-in-out"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
