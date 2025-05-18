import { useNavigate } from "react-router-dom";
import { hero } from "../assets";
import Button from "../components/Button";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-graybg h-[90vh]">
      <div className="container mx-auto gap-[20%] flex items-center justify-center">
        <div className="flex flex-col items-start text-start">
          <h1 className="text-6xl font-extrabold text-start">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR ENERGY
          </h1>
          <p className=" my-7">
            Browse through our diverse range of meticulously crafted garments,
            <br />
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div onClick={()=>navigate('/products')}>
            <Button text="Shop Now" color="black" />
          </div>
        </div>
        <div className="mt-12 border-7 border-main relative hero">
          <img src={hero} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
