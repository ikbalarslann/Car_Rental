import Stat from "../components/Stat";

const AboutCompany = () => {
  return (
    <div className="aboutCompany">
      <h1 className="aboutCompany__title">Hey i am About company component</h1>
      <img
        src=""
        alt="a guy and a girl looking at each other"
        className="aboutCompany__image"
      />
      <div className="aboutCompany__content">
        <h4 className="aboutCompany__section-title">About Company</h4>
        <h1 className="aboutCompany__section-subtitle">
          You start the engine and your adventure begins
        </h1>
        <p className="aboutCompany__section-description">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>
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
