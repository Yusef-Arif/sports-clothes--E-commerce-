import React, { useEffect, useState } from "react";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import { Link, Outlet, useLocation } from "react-router-dom";
import Details from "../../components/dashboard/Details";

const Dashboard = () => {
  const [active, setActive] = useState();
  const [slide, setSlide] = useState(true);
  const handleSlide = () => {
    setSlide(!slide);
  };
  const location = useLocation();
  useEffect(() => {
    const index = buttons.findIndex(
      (button) => button.link === `${location.pathname}`
    );
    setActive(index);
  }, [location.pathname]);
  const buttons = [{
    name: "Users",
    icon: "fa-solid fa-users",
    link: "/dashboard/users",
  },
  {
    name: "Products",
    icon: "fa-solid fa-shop",
    link: "/dashboard/products",
  },
  {
    name: "Add Products",
    icon: "fa-solid fa-cart-plus",
    link: "/dashboard/addproducts",
  }]
  return (
    <section>
      <DashboardHeader handleSlide={() => handleSlide()} />
      <div className="flex min-h-[88vh]">
        <div className={`flex flex-col gap-5 ${slide?"w-[20%]":"w-[fit-content]"}  bg-white p-5 border-r-2 border-gray-200`}>
          {buttons.map((button, index) => (
            <Link
              onClick={() => setActive(index)}
              key={index}
              to={button.link}
              className={`"font-semibold text-xl max-sm:text-sm bg-graybg lg:p-5 max-sm:p-2 rounded-2xl flex justify-start items-center hover:bg-shadowbg transition-all duration-300 ease-in-out ${
                active === index ? "bg-main text-white" : ""
              }`}
            >
              <i className={`${button.icon} lg:mr-2`}></i>
              <span className={`${slide? 'max-sm:hidden':"hidden"}`}>{button.name}</span>
            </Link>
          ))}
        </div>
        <div className="w-[100%] p-5 bg-graybg">
          {location.pathname === "/dashboard" ? <Details /> : <Outlet />}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
