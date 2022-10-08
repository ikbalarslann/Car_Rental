import Car_Data from "../store/CarData";
import { useState } from "react";

const PickCar = () => {
  const [selectedCar, setSelectedCar] = useState("Audi A1 S-Line");

  const handleCarSelection = (carName) => {
    setSelectedCar(carName);
  };

  let car = Car_Data.find((element) => element.name === selectedCar);

  return (
    <div className="pick">
      <h2>hey i am Pick Car component</h2>
      <h3>Vehicle Models</h3>
      <h1>Our rental fleet</h1>
      <p>
        choose from a variety of our amazing vehicles to rent for your next{" "}
        <br /> adventure or business trip
      </p>
      <div className="pick__choose">
        <div className="pick__choose-choose">
          <div
            className="pick__choose-option"
            onClick={() => handleCarSelection("Audi A1 S-Line")}
          >
            Audi A1 S-Line
          </div>
          <div
            className="pick__choose-option"
            onClick={() => handleCarSelection("WW Golf 6")}
          >
            WW Golf 6
          </div>
          <div
            className="pick__choose-option"
            onClick={() => handleCarSelection("Toyota Camry")}
          >
            Toyota Camry
          </div>
          <div
            className="pick__choose-option"
            onClick={() => handleCarSelection("BMW 320 ModernLine")}
          >
            BMW 320 ModernLine
          </div>
          <div
            className="pick__choose-option"
            onClick={() => handleCarSelection("Mercedes-Benz GLK")}
          >
            Mercedes-Benz GLK
          </div>
          <div
            className="pick__choose-option"
            onClick={() => handleCarSelection("VW Passat CC")}
          >
            VW Passat CC
          </div>
        </div>
        <img src={car && car.img} alt="car image" />
        <div className="pick__choose-info">
          <table>
            <thead>
              <tr>
                <th>{selectedCar}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Model</td>
                <td>{car && car.model}</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>{car && car.mark}</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>{car && car.year}</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>{car && car.doors}</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>{car && car.air}</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>{car && car.transmission}</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>{car && car.fuel}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PickCar;
