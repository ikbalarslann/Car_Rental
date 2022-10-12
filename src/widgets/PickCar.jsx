import Car_Data from "../store/CarData";
import { useState } from "react";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Desc from "../components/Desc";

const PickCar = () => {
  const [selectedCar, setSelectedCar] = useState("Audi A1 S-Line");

  const handleCarSelection = (carName) => {
    setSelectedCar(carName);
  };

  let car = Car_Data.find((element) => element.name === selectedCar);

  return (
    <div className="pick">
      <SubTitle subtitle="Vehicle Models" />
      <Title title="Our rental fleet" />
      <Desc
        desc=" choose from a variety of our amazing vehicles to rent for your next
        <br /> adventure or business trip"
      />

      <div className="pick__choose">
        <div className="pick__choose-choose">
          {Car_Data.map((e) => (
            <div
              className="pick__choose-option"
              onClick={() => handleCarSelection(e.name)}
            >
              {e.name}
            </div>
          ))}
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
