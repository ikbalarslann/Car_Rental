import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";
import CarBox from "../components/CarBox";

const Vehicles = () => {
  return (
    <div>
      <h1>hey i am Vehicles page</h1>
      <HeroPages name="Vehicles" />
      <CarBox />
      <Banner />
    </div>
  );
};

export default Vehicles;
