import Card from "../components/Card";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
const PlanTrip = () => {
  return (
    <div className="plan-trip">
      <SubTitle subtitle="Plan your trip now" />
      <Title title="Quick & easy car rental" />

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
