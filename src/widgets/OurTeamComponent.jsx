import Team_Data from "../store/TeamData";
import SubTitle from "../components/chunks/SubTitle";
import Desc from "../components/chunks/Desc";

const OurTeamComponent = () => {
  return (
    <div className="ourTeamComponent">
      {Team_Data.map((element, index) => (
        <div key={index} className="ourTeamComponent__member">
          <img
            src={element.img}
            alt="Person Photo"
            className="ourTeamComponent__image"
          />
          <SubTitle subtitle={element.name} />
          <Desc desc={element.position} />
        </div>
      ))}
    </div>
  );
};

export default OurTeamComponent;
