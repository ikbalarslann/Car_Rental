import Car_Data from "./CarData";
import { Link } from "react-router-dom";

const CarBox = () => {
  return (
    <div className="carBox">
      <h2 className="carBox__title">hey i am CarBox component</h2>
      {Car_Data.map((element) => (
        <div key={element.id} className="carBox__item">
          <img src={element.img} alt="car image" className="carBox__image" />
          <div className="carBox__details">
            <h1 className="carBox__model">{element.model}</h1>
            <h4 className="carBox__mark">{element.mark}</h4>
            <h4 className="carBox__transmission">{element.transmission}</h4>
          </div>
          <div className="carBox__pricing">
            <h1 className="carBox__price">${element.price}</h1>
            <p className="carBox__price-unit">per day</p>
            <h4 className="carBox__doors">{element.doors}</h4>
            <h4 className="carBox__fuel">{element.fuel}</h4>
          </div>
          <Link to="/" className="carBox__book-button">
            Book Ride
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CarBox;
