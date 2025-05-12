import React from "react";
import { equipment, kids, men, supliments, women } from "../assets";

const Categories = () => {
  const categories = [
    {
      name: "Men's",
      image: men,
    },
    {
      name: "women's",
      image: women,
    },
    { name: "kids", image: kids },
    { name: "Accessories", image: equipment },
    { name: "Suplimente", image: supliments },
  ];
  return (
    <section>
      <div className="container mx-auto bg-graybg p-7 rounded-3xl">
        <h1 className="text-4xl font-extrabold text-center my-10">
          BROWSE BY CATEGORIES
        </h1>
        <div className="grid grid-cols-5 gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="rounded-2xl w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <h1 className="absolute text-white font-extrabold text-3xl">
                {item.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
