import { useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";
import Spinner from "./Spinner";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ data, setAuth, loading, dashboard }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      setAuth(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className={`${
        dashboard ? "top-25 right-10" : "top-12 right-0"
      } select-none z-20 absolute top-12 right-0 w-[300px] h-[fit-content] bg-white shadow-lg rounded-lg p-2 flex items-center gap-4 flex-col`}
    >
      {loading && <Spinner />}
      <div className="w-[50%]">
        <img src={data.avatar} alt="avatar" className=" rounded-full " />
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-main">
          <span>Name:</span> {data.name}
        </h1>
        <p className="text-xl font-bold text-main">
          <span>Email:</span> {data.email}
        </p>
        {data.role === "admin" && (
          <p className="text-xl font-bold text-main">
            <span>Role:</span> {data.role}
          </p>
        )}
      </div>
      {data.role === "admin" && !dashboard && (
        <div onClick={() => navigate("/dashboard")}>
          <Button color="black" text="Dashboard" />
        </div>
      )}
      <div
        className="flex items-center gap-2 cursor-pointer bg-red-100 text-red-400  py-3  px-7 rounded-xl"
        onClick={handleLogout}
      >
        <i className="fa-solid fa-arrow-right-from-bracket fa-2xl"></i>
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default UserDetails;
