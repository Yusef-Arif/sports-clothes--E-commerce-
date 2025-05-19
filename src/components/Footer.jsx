import ContactUS from "./ContactUS";

const Footer = () => {
  return (
    <section className="relative bg-graybg max-sm:mt-[10%] max-sm:pt-[30%]">
      <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-[95%] max-w-5xl">
        <ContactUS />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-5 mt-24 md:mt-20">
        <div className="w-full">
          <h1 className="text-3xl font-extrabold text-main">Sport</h1>
          <p className="text-gray-500 my-5">
            Your one-stop destination for all your sports needs. We have clothes
            that suits your style and which you're proud to wear. From women to
            men.
          </p>
          <div>
            <i className="fa-brands fa-facebook fa-2xl mx-2 cursor-pointer" />
            <i className="fa-brands fa-instagram fa-2xl mx-2 cursor-pointer" />
            <i className="fa-brands fa-twitter fa-2xl mx-2 cursor-pointer" />
            <i className="fa-brands fa-pinterest fa-2xl mx-2 cursor-pointer" />
          </div>
        </div>
        <ul>
          <h1 className="text-2xl font-semibold text-main">Help</h1>
          <ul className="text-gray-500 my-2">
            <li>Customer</li>
            <li>Returns</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </ul>
        <ul>
          <h1 className="text-2xl font-semibold text-main">About</h1>
          <ul className="text-gray-500 my-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </ul>
      </div>
      <div className="p-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-center">
            © 2025 Sport. All rights reserved.
          </p>
          <p className="text-gray-500 text-center">Designed by Yusef</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
