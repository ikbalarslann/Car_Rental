import HeroPages from "../components/HeroPages";
import AboutCompany from "../components/AboutCompany";
import PlanTrip from "../components/PlanTrip";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div>
      <h1>hey i am about page</h1>
      <HeroPages name="About" />
      <AboutCompany />
      <PlanTrip />
      <Banner />
    </div>
  );
};

export default About;
