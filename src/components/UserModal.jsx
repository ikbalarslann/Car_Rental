import React, { useState } from "react";

const UserModal = ({ setModal }) => {
  const [title, setTitle] = useState("Sign In");

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="userModal">
      <button
        className="userModal__closeButton"
        onClick={() => setModal(false)}
      >
        X
      </button>
      <h1 className="userModal__title">{title}</h1>

      <div>
        <form className="userModal__form" onSubmit={handleSubmit}>
          <div className="userModal__formGroup">
            <label className="userModal__label" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="userModal__input"
              required
            />
          </div>
          <div className="userModal__formGroup">
            <label className="userModal__label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="userModal__input"
              required
            />
          </div>
          <div className="userModal__formGroup">
            <button className="userModal__submitButton">{title}</button>
          </div>
        </form>

        {title === "Sign In" ? (
          <div className="userModal__info">
            <p>
              New to Car Rental?{" "}
              <a
                className="userModal__link"
                href="#"
                onClick={() => setTitle("Sign Up")}
              >
                Sign Up
              </a>
            </p>
            <p>Test Account - carrental@gymail.com / testpassword123</p>
          </div>
        ) : (
          <div className="userModal__info">
            <p>
              Already have an account?{" "}
              <a
                className="userModal__link"
                href="#"
                onClick={() => setTitle("Sign In")}
              >
                Sign In
              </a>
            </p>
            <p>(For making a new account go to the Sign Up Page)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;
