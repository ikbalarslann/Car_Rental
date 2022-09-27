import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <h1>hey i am about page</h1>
      <HeroPages />
      <div className="about__company">About Company</div>
      <PlanTrip />
      <Banner />
    </div>
  );
};

export default About;
