import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../api/auth";
import Cookies from "js-cookie";
import UserDetails from "../UserDetails";
import Search from "./Search";

const DashboardHeader = ({ handleSlide }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [active, setActive] = useState(false);

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
    }
  };
  return (
    <header className="shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center bg-white p-5">
        <div className="flex items-center gap-5">
          <div
            className="cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          {/* Hamburger only on mobile */}
          <i
            className="fa-solid fa-bars fa-2xl cursor-pointer block md:hidden"
            onClick={handleSlide}
          ></i>
        </div>
        <div className="hidden md:block w-full max-w-md mx-5">
          <Search />
        </div>
        <div className="flex items-center space-x-4">
          <i
            className="fa-solid fa-house fa-2xl cursor-pointer"
            onClick={() => navigate("/")}
          ></i>
          <i
            className="fa-solid fa-user fa-2xl cursor-pointer"
            onClick={handleClick}
          ></i>
          {user && active && (
            <UserDetails
              data={user}
              setAuth={setActive}
              loading={loading}
              dashboard
            />
          )}
        </div>
      </div>
      {/* Mobile search below nav */}
      <div className="block md:hidden px-5 pb-3">
        <Search />
      </div>
    </header>
  );
};

export default DashboardHeader;
