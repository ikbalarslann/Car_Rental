import React, { useState } from "react";
import Car_Data from "../store/CarData";
import { Link } from "react-router-dom";
import Title from "./chunks/Title";
import SubTitle from "./chunks/SubTitle";
import Desc from "./chunks/Desc";
import Modal from "./Modal";

const CarBox = () => {
  const [carModals, setCarModals] = useState({});

  const openModal = (carName) => {
    setCarModals((prevModals) => ({
      ...prevModals,
      [carName]: true,
    }));
  };

  const closeModal = (carName) => {
    setCarModals((prevModals) => ({
      ...prevModals,
      [carName]: false,
    }));
  };

  return (
    <div className="carBox">
      {Car_Data.map((element) => {
        const title = "$" + element.price;
        const carName = element.name;
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

            <button
              className="book-car__form-button"
              type="button"
              onClick={() => openModal(carName)}
            >
              Search
            </button>
            {carModals[carName] && (
              <Modal setModal={() => closeModal(carName)} carName={carName} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CarBox;
