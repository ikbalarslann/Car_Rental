import Team_Data from "../store/TeamData";

const OurTeamComponent = () => {
  return (
    <div className="ourTeamComponent">
      <h1 className="ourTeamComponent__title">Hey, I am our team component</h1>
      {Team_Data.map((element, index) => (
        <div key={index} className="ourTeamComponent__member">
          <img
            src={element.img}
            alt="Person Photo"
            className="ourTeamComponent__image"
          />
          <h2 className="ourTeamComponent__name">{element.name}</h2>
          <p className="ourTeamComponent__position">{element.position}</p>
        </div>
      ))}
    </div>
  );
};

export default OurTeamComponent;
