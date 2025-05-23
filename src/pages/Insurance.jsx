const Insurance = () => {
  const text = [
    {
      icon: "fa-solid fa-truck-fast fa-2xl",
      title: "Free Shipping",
      description: "On All Orders Over $99",
    },
    {
      icon: "fa-solid fa-handshake fa-2xl",
      title: "Secure Paymanet",
      description: "We ensure secure payment",
    },
    {
      icon: "fa-solid fa-shield-halved fa-2xl",
      title: "100% Money Back",
      description: "30 Days Return Policy",
    },
    {
      icon: "fa-solid fa-headset fa-2xl",
      title: "Online Support",
      description: "24/7 Dedicated Support",
    },
  ];

  return (
    <div className="bg-main">
      <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-y-0 md:gap-x-4 p-5 md:p-7 container mx-auto">
        {text.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-white w-full md:w-auto justify-center"
          >
            <i className={item.icon}></i>
            <div>
              <h1 className="font-bold">{item.title}</h1>
              <p className="font-light">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insurance;
