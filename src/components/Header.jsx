import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
              Home
            </li>
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
              <a>New Arrivals</a>
            </li>
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-xl hover:font-bold transition-all duration-300 ease-in-out">
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
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-cart-shopping  fa-2xl cursor-pointer"></i>
            <i
              className="fa-solid fa-user fa-2xl cursor-pointer"
              onClick={() => navigate("/login")}
            ></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
