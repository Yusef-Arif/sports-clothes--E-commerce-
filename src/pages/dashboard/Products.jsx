import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
  getFilterProducts,
} from "../../api/products";
import View from "../../components/dashboard/View";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import toast from "react-hot-toast";
import usePagination from "../../hooks/usePagination";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filterProducts);
  const allProducts = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);
  const { search } = useSelector((state) => state.products);
  const { page, limit, offset, nextPage, prevPage } = usePagination(1, 10);
  const [view, setView] = useState(false);
  const [viewData, setViewData] = useState({});

  const handleView = (data) => {
    setView(!view);
    setViewData(data);
  };

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getFilterProducts(`offset=${offset}&limit=${limit}`));
  }, [dispatch, offset, limit]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProduct(id))
        .unwrap()
        .then(() => toast.success("Product deleted successfully"));
    } catch (err) {
      console.error("some thing went wrong:", err);
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full min-h-[130vh] bg-shadowbg  flex items-center justify-center z-50">
          <Spinner size="size-50" />
        </div>
      )}
      {view && <View data={viewData} setView={setView} type="products" />}
      <div className="overflow-x-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4">Products List</h1>
          <Link to="/dashboard/addproducts">
            <button className=" bg-main text-white font-semibold text-xl px-4 py-2 rounded-md cursor-pointer filter hover:bg-white hover:text-main border transition-all duration-300 ease-in-out">
              <i className="fa-solid fa-cart-plus mr-2"></i>
              Add Product
            </button>
          </Link>
        </div>
        <table className="min-w-full divide-y divide-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Image
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Price
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>

          {products.length > 0 ? (
            <tbody className="bg-white divide-y divide-gray-100 text-main">
              {(search.length === allProducts.length ? products : search).map(
                (product) => (
                  <tr key={product.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">
                      <img
                        src={product.images}
                        alt={product.title}
                        className="h-16 w-24 object-cover rounded shadow-sm"
                      />
                    </td>
                    <td className="px-4 py-2">{product.title}</td>
                    <td className="px-4 py-2">{product.category?.name}</td>
                    <td className="px-4 py-2">${product.price}</td>
                    <td className="px-4 py-2 truncate max-w-xs">
                      {product.description}
                    </td>
                    <td className=" flex gap-4 justify-center items-center p-7">
                      <Link to={`/dashboard/editproduct/${product.id}`}>
                        <i class="fa-solid fa-pencil fa-2xl text-blue-400 cursor-pointer"></i>
                      </Link>
                      <i
                        className="fa-solid fa-eye fa-2xl text-green-300 cursor-pointer"
                        onClick={() => handleView(product)}
                      ></i>

                      <i
                        className="fa-solid fa-trash fa-2xl text-red-400  cursor-pointer"
                        onClick={() => handleDelete(product.id)}
                      ></i>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          ) : (
            <h1 className="text-center text-2xl font-bold text-red-400">
              there is no Products
            </h1>
          )}
        </table>
        {search.length === 0 ||
          (search.length === allProducts.length && (
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevPage}
                disabled={page === 1}
                className="cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-main hover:text-white transition-all duration-300 ease-in-out"
              >
                Previous
              </button>
              <span className="text-lg font-semibold">
                Page {page} of {Math.ceil(allProducts.length / limit)}
              </span>
              <button
                onClick={nextPage}
                disabled={page === Math.ceil(allProducts.length / limit)}
                className="cursor-pointer bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-main hover:text-white transition-all duration-300 ease-in-out"
              >
                Next
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
