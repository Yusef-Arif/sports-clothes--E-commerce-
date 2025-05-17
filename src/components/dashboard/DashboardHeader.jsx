import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../../api/auth";
import Cookies from "js-cookie";
import UserDetails from "../UserDetails";

const DashboardHeader = ({ handleSlide }) => {
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
    }
  };
  return (
    <header className="shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center bg-white p-5">
        <div className="flex items-center gap-5">
          <Link to={"/dashboard"}>
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </Link>
          <i
            class="fa-solid fa-bars fa-2xl cursor-pointer"
            onClick={() => handleSlide()}
          ></i>
        </div>
        <div className="flex items-center gap-2 bg-graybg p-3 rounded-xl">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="border-none outline-none pr-6"
            placeholder="Search for products..."
          />
        </div>
        <div className="flex items-center space-x-4">
          <i
            class="fa-solid fa-house fa-2xl cursor-pointer"
            onClick={() => navigate("/")}
          ></i>

          <i
            className="fa-solid fa-user fa-2xl cursor-pointer"
            onClick={handleClick}
          ></i>
          {user && active && (
            <UserDetails data={user} setAuth={setActive} loading={loading} dashboard />
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
