import { useNavigate } from "react-router-dom";
import { hero } from "../assets";
import Button from "../components/Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-graybg min-h-[90vh] flex items-center pb-8 md:py-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[8vw] px-4">
        <div className="flex flex-col items-start text-start w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR ENERGY
          </h1>
          <p className="my-5 md:my-7 text-base md:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            <br className="hidden sm:block" />
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div onClick={() => navigate("/products")}>
            <Button text="Shop Now" color="black" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-12 relative">
          <div className="border-4 border-main rounded-lg overflow-hidden relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px]">
            <img src={hero} alt="Hero" className="w-full h-auto object-cover" />
            <div className="hero absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
