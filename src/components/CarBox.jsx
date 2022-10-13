import Car_Data from "../store/CarData";
import { Link } from "react-router-dom";
import Title from "./Title";
import SubTitle from "./SubTitle";
import Desc from "./Desc";

const CarBox = () => {
  return (
    <div className="carBox">
      {Car_Data.map((element) => {
        const title = "$" + element.price;
        return (
          <div key={element.id} className="carBox__item">
            <img src={element.img} alt="car image" className="carBox__image" />
            <div className="carBox__details">
              <Title title={element.model} />
              <SubTitle subtitle={element.mark} />
              <SubTitle subtitle={element.transmission} />
            </div>
            <div className="carBox__pricing">
              <Title title={title} />
              <Desc desc="per day" />
              <SubTitle subtitle={element.doors} />
              <SubTitle subtitle={element.fuel} />
            </div>
            <Link to="/" className="carBox__book-button">
              Book Ride
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CarBox;
