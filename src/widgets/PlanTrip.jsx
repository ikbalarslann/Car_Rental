import Card from "../components/Card";
const PlanTrip = () => {
  return (
    <div className="plan-trip">
      <h2 className="plan-trip__title">hey i am PlanTrip component</h2>
      <h3 className="plan-trip__subtitle">Plan your trip now</h3>
      <h1 className="plan-trip__main-title">Quick & easy car rental</h1>
      <div className="plan-trip__options">
        <Card
          title="Select Car"
          desc="We offer a big range of vehicles for all <br />
        your driving needs. We have the <br />
        perfect car to meet your needs"
        />
        <Card
          title="Contact Operator"
          desc="Our knowledgeable and friendly <br />
            operators are always ready to help <br />
            with any questions or concerns"
        />
        <Card
          title="Let's Drive"
          desc=" Whether you're hitting the open road. <br />
            We've got you covered with your wide <br />
            range of cars"
        />
      </div>
    </div>
  );
};
export default PlanTrip;
