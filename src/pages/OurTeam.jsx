import HeroPages from "../components/HeroPages";
import OurTeamComponent from "../widgets/OurTeamComponent";
import Banner from "../components/Banner";

const OurTeam = () => {
  return (
    <div>
      <h1>hey i am OurTeam page</h1>
      <HeroPages name="Our Team" />
      <OurTeamComponent />
      <Banner />
    </div>
  );
};

export default OurTeam;
