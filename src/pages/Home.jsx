import HomeProductsSections from "../components/HomeProductsSections";
import Categories from "./Categories";
import Hero from "./Hero";
import Insurance from "./Insurance";
import Testemonials from "./Testemonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Insurance />
      <div className="my-[10%]">
        <HomeProductsSections section="NEW ARRIVALES" />
      </div>
      <div className="my-[10%]">
        <HomeProductsSections section="TOP SELLING" />
      </div>
      <Categories />
      <div className="mt-[5%] mb-[10%]">
        <Testemonials />
      </div>
    </>
  );
};

export default Home;
