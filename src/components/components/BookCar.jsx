import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import Modal from "./Modal";
import Car_Data from "./CarData";

const BookCar = () => {
  const [modal, setModal] = useState(false);

  //booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOf, setDropOf] = useState("");
  const [pickDate, setPickDate] = useState(null);
  const [dropDate, setDropDate] = useState(null);

  //booking car event handlers
  const handleCarTypeChange = (e) => {
    setCarType(e.target.value);
  };
  const handlePickUpChange = (e) => {
    setPickUp(e.target.value);
  };
  const handleDropOfChange = (e) => {
    setDropOf(e.target.value);
  };
  const handlePickDateChange = (e) => {
    setPickDate(e);
  };
  const handleDropDateChange = (e) => {
    setDropDate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="book-car">
      <h2 className="book-car__title">Hey, I am Book Car component</h2>
      <h1>Book a car</h1>
      <form className="book-car__form" onSubmit={handleSubmit}>
        <div>
          <label className="book-car__label" htmlFor="carType">
            Car Type: {carType}
          </label>
          <select
            className="book-car__select"
            id="carType"
            name="carType"
            value={carType}
            onChange={handleCarTypeChange}
            required
          >
            <option value="">Select a car type</option>
            {Car_Data.map((element) => (
              <option key={element.name} value={element.name}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="book-car__label" htmlFor="pickUpLocation">
            Pick Up Location:{pickUp}
          </label>
          <select
            className="book-car__select"
            id="pickUpLocation"
            name="pickUpLocation"
            value={pickUp}
            onChange={handlePickUpChange}
            required
          >
            <option value="">Select Pick Up Location</option>
            <option value="Istanbul">Istanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="Izmir">Izmir</option>
            <option value="Adana">Adana</option>
            <option value="Bursa">Bursa</option>
          </select>
        </div>
        <div>
          <label className="book-car__label" htmlFor="dropOfLocation">
            Drop Off Location:{dropOf}
          </label>
          <select
            className="book-car__select"
            id="dropOfLocation"
            name="dropOfLocation"
            value={dropOf}
            onChange={handleDropOfChange}
            required
          >
            <option value="">Select Pick Up Location</option>
            <option value="Istanbul">Istanbul</option>
            <option value="Ankara">Ankara</option>
            <option value="Izmir">Izmir</option>
            <option value="Adana">Adana</option>
            <option value="Bursa">Bursa</option>
          </select>
        </div>
        <div>
          <label className="book-car__label" htmlFor="pickUpDate">
            Pick Up Date:
          </label>
          <ReactDatePicker
            className="book-car__datepicker"
            id="pickUpDate"
            selected={pickDate}
            onChange={handlePickDateChange}
            required
          />
        </div>
        <div>
          <label className="book-car__label" htmlFor="dropOffDate">
            Drop Off Date:
          </label>
          <ReactDatePicker
            className="book-car__datepicker"
            id="dropOffDate"
            selected={dropDate}
            onChange={handleDropDateChange}
            required
          />
        </div>
        <div>
          <button
            className="book-car__form-button"
            type="submit"
            onClick={() => setModal(true)}
          >
            Search
          </button>
          {modal && (
            <Modal
              setModal={setModal}
              carName={carType}
              pickUpDate={pickDate}
              dropOffDate={dropDate}
              pickUpLocation={pickUp}
              dropOfLocation={dropOf}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default BookCar;
