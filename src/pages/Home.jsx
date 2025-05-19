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
      <div className="my-[10%]" id="newarrivals">
        <HomeProductsSections
          section="NEW ARRIVALES"
          query="offset=0&limit=8"
        />
      </div>
      <div className="my-[10%]">
        <HomeProductsSections section="TOP SELLING" query="offset=8&limit=8" />
      </div>
      <div id="categories">
      <Categories /></div>
      <div className="mt-[5%] mb-[10%]">
        <Testemonials />
      </div>
    </>
  );
};

export default Home;
