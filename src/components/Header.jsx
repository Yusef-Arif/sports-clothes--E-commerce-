import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/auth";
import UserDetails from "./UserDetails";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  
  const handleClick = async () => {
    const token = Cookies.get("accessToken");

    if (token) {
      if (!user) {
        await dispatch(getProfile()).unwrap();
      }
      setActive(!active);
    } else {
      navigate("/login");
    }
  };

  return (
    <header>
      <nav className="bg-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <h1
            className="text-main text-3xl font-extrabold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Sport
          </h1>
          <ul className="flex space-x-4 font-semibold text-lg">
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out"
            >
              Home
            </li>
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out"
            >
              <a>New Arrivals</a>
            </li>
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out"
            >
              <a>Categories</a>
            </li>
          </ul>
          <div className="flex items-center gap-2 bg-graybg p-3 rounded-xl">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              className="border-none outline-none pr-6"
              placeholder="Search for products..."
            />
          </div>
          <div className="flex items-center gap-5 relative">
            <i className="fa-solid fa-cart-shopping  fa-2xl cursor-pointer"></i>
            <i
              className={`fa-solid fa-user fa-2xl cursor-pointer`}
              onClick={handleClick}
            ></i>
            {user && active && (
              <UserDetails data={user} setAuth={setActive} loading={loading} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
