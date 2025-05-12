import ContactUS from "./ContactUS";

const Footer = () => {
  return (
    <section className="relative bg-graybg">
      <div className="absolute top-[-25%] left-[10%] w-[90%]">
        <ContactUS />
      </div>
      <div className="container mx-auto grid grid-cols-3 p-5 mt-[5%]">
        <div className="w-[50%]">
          <h1 className="text-3xl font-extrabold text-main">Sport</h1>
          <p className="text-gray-500  my-5">
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
      <div className=" p-5">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-500">
            © 2025 Sport. All rights reserved.{" "}
          </p>
          <p className="text-gray-500">Designed by Yusef</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
