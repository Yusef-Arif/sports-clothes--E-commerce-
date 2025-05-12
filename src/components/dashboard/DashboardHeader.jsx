import { Link } from "react-router-dom";

const DashboardHeader = ({ handleSlide }) => {
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
          <i className="fa-solid fa-user fa-2xl cursor-pointer"></i>
          <Link to={"/"}>
            <i class="fa-solid fa-house fa-2xl cursor-pointer"></i>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
