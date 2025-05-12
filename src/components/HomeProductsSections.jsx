import { productImage } from "../assets";
import Button from "./Button";
import Rating from "./Rating";

const HomeProductsSections = ({section}) => {
  const data = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: productImage,
      rate: 2.5,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: productImage,
      rate: 4.5,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: productImage,
      rate: 4.5,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: productImage,
      rate: 1.5,
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center my-10">{section}</h1>
        <div className="grid grid-cols-4 gap-3">
          {data.map((item) => (
            <div key={item.id} className=" p-4">
              <img src={item.image} alt={item.name} className="rounded-2xl" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <Rating rate={item.rate} />
              <p className="text-lg font-bold">${item.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <Button text="View All" />
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSections;
