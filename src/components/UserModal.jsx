import React, { useState } from "react"; // Make sure to import React
import Button from "../components/chunks/Button";
import Link from "./chunks/Link";
import Title from "./chunks/Title";

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
      <Button onclick={() => setModal(false)} content="X" />
      <Title title={title} />
      <div>
        <form className="userModal__form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Button content={title} />
          </div>
        </form>
        {title === "Sign In" ? (
          <div>
            <p>
              New to Car Rental?
              <Link content="Sign Up" onClick={() => setTitle("Sign Up")} />
            </p>
            <p>Test Account - carrental@gymail.com / testpassword123</p>
          </div>
        ) : (
          <div>
            <p>
              Already have an account?{" "}
              {<Link content="Sign In" onClick={() => setTitle("Sign In")} />}
            </p>
            <p>(For making a new account go to the Sign Up Page)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;
