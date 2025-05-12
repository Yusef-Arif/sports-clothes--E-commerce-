import { useAppSelectors } from "../../hooks/useSelector";
import Spinner from "../Spinner";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../api/products";
import { getAllUsers } from "../../api/users";

const Details = () => {
  const dispatch = useDispatch();
  const { products, loading, error, users, userLoading, userError } =
    useAppSelectors();
  const data = [
    {
      name: "Users",
      icon: "fa-solid fa-users",
      link: "/dashboard/users",
      length: users.length,
    },
    {
      name: "Products",
      icon: "fa-solid fa-cart-plus",
      link: "/dashboard/products",
      length: products.length,
    },
  ];
  useEffect(() => {
    dispatch(getAllProducts("https://api.escuelajs.co/api/v1/products"));
    dispatch(getAllUsers("https://api.escuelajs.co/api/v1/users"));
  }, [dispatch]);
  if (error || userError) {
    return (
      <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-shadowbg  flex items-center justify-center z-50">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
      </div>
    );
  }
  return (
    <>
      {loading || userLoading ? (
        <div className="absolute top-0 left-0 w-full min-h-[100vh] bg-shadowbg  flex items-center justify-center z-50">
          <Spinner size="size-50" />
        </div>
      ) : (
        <section className=" p-5 ">
          <div className="flex gap-5">
            {data.map((item, index) => (
              <div
                key={index}
                className=" bg-white p-5 rounded-2xl flex flex-col justify-center items-center">
                <div className="flex font-semibold text-xl justify-center items-center">
                  <i className={`${item.icon} mr-2`}></i>
                  <span className="">{item.name}</span>
                </div>
                <div className="flex items-center justify-center mx-auto my-3">
                  <span className="text-4xl font-bold text-main ml-2">
                    {item.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Details;
