import Stat from "../components/Stat";
import SubTitle from "../components/chunks/SubTitle";
import Title from "../components/chunks/Title";
import Desc from "../components/chunks/Desc";

const AboutCompany = () => {
  return (
    <div className="aboutCompany">
      <img
        src=""
        alt="a guy and a girl looking at each other"
        className="aboutCompany__image"
      />
      <div className="aboutCompany__content">
        <SubTitle subtitle="About Company" />
        <Title title="You start the engine and your adventure begins" />
        <Desc
          desc=" Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended."
        />

        <div className="aboutCompany__stats">
          <Stat value="20" label="Car Types" />
          <Stat value="85" label="Rental Outlets" />
          <Stat value="75" label="Repair Shop" />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
