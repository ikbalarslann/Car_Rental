import Car_Data from "../store/CarData";
import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const Modal = ({
  setModal,
  carName,
  pickUpDate,
  dropOffDate,
  pickUpLocation,
  dropOfLocation,
}) => {
  const [carType, setCarType] = useState(carName);
  let car = Car_Data.find((element) => element.name === carType);

  const [pickUp, setPickUp] = useState(pickUpLocation);
  const [dropOf, setDropOf] = useState(dropOfLocation);
  const [pickDate, setPickDate] = useState(pickUpDate);
  const [dropDate, setDropDate] = useState(dropOffDate);

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

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <h1 className="modal__title">Complete Reservation</h1>
        <button onClick={() => setModal(false)} className="modal__close-button">
          X
        </button>
        <div className="modal__info">
          <h2 className="modal__info-title">
            Upon completing this reservation enquiry, you will receive:
          </h2>
          <p className="modal__info-text">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="modal__location-date">
          <div className="modal__location-date-item">
            <h2 className="modal__sub-title">Location & Date</h2>
            <form className="book-car__form" onSubmit={handleOnSubmit}>
              <div>
                <label className="book-car__label" htmlFor="carType">
                  Car Type:
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
                  Pick Up Location:
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
                  Drop Off Location:
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
            </form>
          </div>
          <div className="modal__car">
            <div className="modal__car-info">
              <p className="modal__label">Car -</p>
              <p className="modal__value">{carName}</p>
            </div>
            <img
              src={car && car.img}
              alt="carImage"
              className="modal__car-image"
            />
          </div>
        </div>
        <hr className="modal__hr" />
        <div className="modal__personal-info">
          <h2 className="modal__sub-title">Personal Information</h2>
          <form onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" />
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" />
              <br />
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" />
              <label htmlFor="age">Age:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" />
              <br />
              <label htmlFor="age">Adress:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="city">City:</label>
              <input type="text" />
              <label htmlFor="zipCode">Zip Code:</label>
              <input type="text" />
            </div>
            <label>
              <input type="checkbox" name="checkbox" />
              Please send me latest news and updates
            </label>
          </form>
        </div>
        <button
          onClick={() => setModal(false)}
          className="modal__reserve-button"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Modal;
