import { useState } from "react";
import ReactDatePicker from "react-datepicker";

const BookCar = () => {
  const [formData, setFormData] = useState({
    carType: "",
    pickUpLocation: "",
    dropOfLocation: "",
    pickUpDate: "",
    dropOffDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date, field) => {
    setFormData({ ...formData, [field]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { carType, password } = formData;

    console.log(`Car Type: ${carType}, Password: ${password}`);
  };

  return (
    <div className="book-car">
      <h2 className="book-car__title">Hey, I am Book Car component</h2>
      <h1>Book a car</h1>
      <form className="book-car__form" onSubmit={handleSubmit}>
        <div>
          <label className="book-car__label" htmlFor="carType">
            Car Type:
          </label>
          <select
            className="book-car__select"
            id="carType"
            name="carType"
            value={formData.carType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a car type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            {/* Add more options as needed */}
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
            value={formData.pickUpLocation}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Pick Up Location</option>
            <option value="Sedan">Istanbul</option>
            <option value="SUV">Ankara</option>
            <option value="Truck">Izmir</option>
            {/* Add more options as needed */}
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
            value={formData.dropOfLocation}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Drop Off Location</option>
            <option value="Sedan">Istanbul</option>
            <option value="SUV">Ankara</option>
            <option value="Truck">Izmir</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div>
          <label className="book-car__label" htmlFor="pickUpDate">
            Pick Up Date:
          </label>
          <ReactDatePicker
            className="book-car__datepicker"
            id="pickUpDate"
            selected={formData.pickUpDate}
            onChange={(date) => handleDateChange(date, "pickUpDate")}
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
            selected={formData.dropOffDate}
            onChange={(date) => handleDateChange(date, "dropOffDate")}
            required
          />
        </div>
        <div>
          <button className="book-car__form-button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookCar;
