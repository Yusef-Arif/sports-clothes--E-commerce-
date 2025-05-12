import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../api/products";
import View from "../../components/dashboard/View";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.isLoading);
  const [view, setView] = useState(false);
  const [viewData, setViewData] = useState({});
  console.log(products);

  const handleView = (data) => {
    setView(!view);
    setViewData(data);
  };

  useEffect(() => {
    dispatch(getAllProducts("https://api.escuelajs.co/api/v1/products"));
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProduct(id)).unwrap();
    } catch (err) {
      console.error("some thing went wrong:", err);
    }
  };
  

  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-shadowbg  flex items-center justify-center z-50">
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
              {products.map((product) => (
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
                      class="fa-solid fa-eye fa-2xl text-green-300 cursor-pointer"
                      onClick={() => handleView(product)}
                    ></i>

                    <i
                      class="fa-solid fa-trash fa-2xl text-red-400  cursor-pointer"
                      onClick={() => handleDelete(product.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <h1 className="text-center text-2xl font-bold text-red-400">
              there is no Products
            </h1>
          )}
        </table>
      </div>
    </>
  );
};

export default Products;
