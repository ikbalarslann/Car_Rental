const PlanTrip = () => {
  return (
    <div className="plan-trip">
      <h2 className="plan-trip__title">hey i am PlanTrip component</h2>
      <h3 className="plan-trip__subtitle">Plan your trip now</h3>
      <h1 className="plan-trip__main-title">Quick & easy car rental</h1>
      <div className="plan-trip__options">
        <div className="plan-trip__option">
          <img src="" alt="car photo" className="plan-trip__image" />
          <h2 className="plan-trip__option-title">Select Car</h2>
          <p className="plan-trip__option-description">
            We offer a big range of vehicles for all <br />
            your driving needs. We have the <br />
            perfect car to meet your needs
          </p>
        </div>
        <div className="plan-trip__option">
          <img src="" alt="operator icon" className="plan-trip__image" />
          <h1 className="plan-trip__option-title">Contact Operator</h1>
          <p className="plan-trip__option-description">
            Our knowledgeable and friendly <br />
            operators are always ready to help <br />
            with any questions or concerns
          </p>
        </div>
        <div className="plan-trip__option">
          <img src="" alt="car icon" className="plan-trip__image" />
          <h2 className="plan-trip__option-title">Let's Drive</h2>
          <p className="plan-trip__option-description">
            Whether you're hitting the open road. <br />
            We've got you covered with your wide <br />
            range of cars
          </p>
        </div>
      </div>
    </div>
  );
};
export default PlanTrip;
