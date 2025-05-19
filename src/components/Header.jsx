import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/auth";
import UserDetails from "./UserDetails";
import Cookies from "js-cookie";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

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

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  return (
    <header>
      <nav className="bg-white p-5 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1
            className="text-main text-3xl font-extrabold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Sport
          </h1>

          <div className="md:hidden flex items-center">
            <button
              onClick={handleMenuToggle}
              className="text-main focus:outline-none"
              aria-label="Toggle menu"
            >
              <i
                className={`fa-solid ${
                  menuOpen ? "fa-xmark" : "fa-bars"
                } fa-2xl`}
              ></i>
            </button>
          </div>

          <ul
            className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-4 font-semibold text-lg absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent z-40 transition-all duration-300 ease-in-out ${
              menuOpen ? "flex" : "hidden md:flex"
            }`}
          >
            <li
              onClick={() => {
                navigate("/");
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out px-5 md:px-0"
            >
              Home
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out px-5 md:px-0"
            >
              <a href="#newarrivals">New Arrivals</a>
            </li>
            <li
              onClick={() => {
                setMenuOpen(false);
              }}
              className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out px-5 md:px-0"
            >
              <a href="#categories">Categories</a>
            </li>
            <div className="lg:hidden md:hidden max-sm:p-2">
              <Search />
            </div>
          </ul>

          <div className="flex items-center gap-5 relative">
            <div className="hidden md:block">
              <Search />
            </div>
            <i
              className="fa-solid fa-cart-shopping fa-2xl cursor-pointer"
              onClick={() => navigate("/cart")}
            ></i>
            <i
              className="fa-solid fa-user fa-2xl cursor-pointer"
              onClick={handleClick}
            ></i>
            {user && active && (
              <UserDetails data={user} setAuth={setActive} loading={loading} />
            )}
          </div>
        </div>
        <div className="block md:hidden mt-4">{menuOpen && <Search />}</div>
      </nav>
    </header>
  );
};

export default Header;
