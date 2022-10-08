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
          <div className="aboutCompany__stat">
            <img src="" alt="truck icon" className="aboutCompany__stat-icon" />
            <div className="aboutCompany__stat-details">
              <h1 className="aboutCompany__stat-value">20</h1>
              <p className="aboutCompany__stat-label">Car Types</p>
            </div>
          </div>
          <div className="aboutCompany__stat">
            <img src="" alt="rental icon" className="aboutCompany__stat-icon" />
            <div className="aboutCompany__stat-details">
              <h1 className="aboutCompany__stat-value">85</h1>
              <p className="aboutCompany__stat-label">Rental Outlets</p>
            </div>
          </div>
          <div className="aboutCompany__stat">
            <img src="" alt="repair icon" className="aboutCompany__stat-icon" />
            <div className="aboutCompany__stat-details">
              <h1 className="aboutCompany__stat-value">75</h1>
              <p className="aboutCompany__stat-label">Repair Shop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
