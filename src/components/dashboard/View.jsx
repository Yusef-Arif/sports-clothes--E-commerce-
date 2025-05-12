import React from "react";

const View = ({ data, setView, type }) => {
  let dataType = [];
  if (type === "users") {
    dataType = [
      {
        name: "Id",
        value: data.id,
      },
      {
        name: "Email",
        value: data.email,
      },
      {
        name: "Password",
        value: data.password,
      },
      {
        name: "Name",
        value: data.name,
      },
      {
        name: "Role",
        value: data.role,
      },
    ];
  } else if (type === "products") {
    dataType = [
      {
        name: "Id",
        value: data.id,
      },
      {
        name: "Title",
        value: data.title,
      },
      {
        name: "Category",
        value: data.category?.name,
      },
      {
        name: "Price",
        value: data.price,
      },
      {
        name: "Description",
        value: data.description,
      },
    ];
  }
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-shadowbg w-full h-full flex items-center justify-center">
      <div className="w-[500px] h-[fit-content]  shadow-lg bg-white rounded-2xl">
        <div className="flex justify-between items-center mb-4 bg-main text-white rounded-tr-2xl rounded-tl-2xl p-2">
          <h1 className="text-2xl font-bold mb-4 ">User Details</h1>
          <i
            className="fa-solid fa-xmark fa-2xl cursor-pointer"
            onClick={() => setView(false)}
          ></i>
        </div>
        <div className=" m-5">
          <div className="flex justify-center items-center">
            {type === "products" && (
              <img
                src={data.images}
                alt={data.title}
                className=" max-w-[50%] object-cover rounded shadow-sm mb-2"
              />
            )}
            {type === "users" && (
              <img
                src={data.avatar}
                alt={data.name}
                className="w-[50%] object-cover rounded-full shadow-sm"
              />
            )}
          </div>
          <div className="h-[250px] overflow-y-auto">
          {dataType.map((item, index) => (
            <div
              key={index}
              className="flex justify-between mb-2 p-4 bg-graybg rounded-lg "
            >
              <p className="text-lg font-semibold">{item.name}:</p>
              <p className="text-lg">{item.value}</p>
            </div>
          ))}</div>
        </div>
      </div>
    </div>
  );
};

export default View;
