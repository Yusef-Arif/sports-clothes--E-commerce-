import React, { useState } from "react";
import Rating from "../components/Rating";

const Testemonials = () => {
  const testemonials = [
    {
      name: "John Doe",
      rate: 5,
      text: "This is the best product I've ever used!",
      image: "fa-solid fa-circle-user fa-2xl",
    },
    {
      name: "Jane Smith",
      rate: 4,
      text: "Amazing quality and great service.",
      image: "fa-solid fa-circle-user fa-2xl",
    },
    {
      name: "Sam Wilson",
      rate: 3,
      text: "I love this! Highly recommend to everyone.",
      image: "fa-solid fa-circle-user fa-2xl",
    },
    {
      name: "Peter Parker",
      rate: 2,
      text: "Great value for money. Will buy again.",
      image: "fa-solid fa-circle-user fa-2xl",
    },
    {
      name: "Tony Stark",
      rate: 5,
      text: "Excellent product! Exceeded my expectations.",
      image: "fa-solid fa-circle-user fa-2xl",
    },
    {
      name: "Natasha Romanoff",
      rate: 4,
      text: "Very satisfied with my purchase. Thank you!",
      image: "fa-solid fa-circle-user fa-2xl",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState([0, 3]);
  const cuurentDesplay = testemonials.slice(currentIndex[0], currentIndex[1]);

  const handleNext = () => {
    setCurrentIndex(([first, second]) => {
      if (second >= testemonials.length) return [first, second];
      return [first + 1, second + 1];
    });
  };

  const handlePrev = () => {
    setCurrentIndex(([first, second]) => {
      if (first <= 0) return [first, second];
      return [first - 1, second - 1];
    });
  };

  return (
    <section>
      <div className="container mx-auto bg-white p-5 rounded-3xl">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-start my-10">
            What Our Customers Say
          </h1>
          <div className="flex justify-between items-center gap-3">
            <i
              className="fa-solid fa-left-long fa-2xl cursor-pointer"
              onClick={handlePrev}
            />
            <i
              className="fa-solid fa-right-long fa-2xl cursor-pointer"
              onClick={handleNext}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {cuurentDesplay.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-5 bg-graybg rounded-3xl"
            >
              <div className="my-2">
                <i class={item.image}></i>
              </div>
              <h2 className="text-xl font-bold text-center mt-2">
                {item.name}
              </h2>
              <Rating rate={item.rate} />
              <p className="text-center mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testemonials;
