import Person1 from "../assets/img/team/1.png";
import Person2 from "../assets/img/team/2.png";
import Person3 from "../assets/img/team/3.png";
import Person4 from "../assets/img/team/4.png";
import Person5 from "../assets/img/team/5.png";
import Person6 from "../assets/img/team/6.png";

const OurTeamComponent = () => {
  const team = [
    {
      img: Person1,
      name: "Luke Miller",
      position: "Salesman",
    },
    {
      img: Person2,
      name: "Michael Diaz",
      position: "Business Owner",
    },
    {
      img: Person3,
      name: "Briana Ross",
      position: "Photographer",
    },
    {
      img: Person4,
      name: "Lauren Rivera",
      position: "Car Detailist",
    },
    {
      img: Person5,
      name: "Martin Rizz",
      position: "Mechanic",
    },
    {
      img: Person6,
      name: "Caitlyn Hunt",
      position: "Manager",
    },
  ];
  return (
    <div className="ourTeamComponent">
      <h1 className="ourTeamComponent__title">Hey, I am our team component</h1>
      {team.map((element, index) => (
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
