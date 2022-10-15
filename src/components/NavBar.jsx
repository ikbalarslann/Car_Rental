import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ setCurrentPage }) => {
  const [isActive, setIsActive] = useState(false);

  const linksClass = isActive ? "nav__links active" : "nav__links";

  return (
    <div className="nav">
      <div className="nav__logo">
        <Link className="nav__logo-link" to="/">
          Car Rental
        </Link>
      </div>
      <a
        href="#"
        className="nav__toggle"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="nav__toggle-bar"></span>
        <span className="nav__toggle-bar"></span>
        <span className="nav__toggle-bar"></span>
      </a>
      <div className={linksClass}>
        <ul className="nav__links__ul">
          <li className="nav__links__ul-li">
            <Link to="/" className="nav__page-link">
              Home
            </Link>
          </li>
          <li className="nav__links__ul-li">
            <Link
              to="/pages/about"
              className="nav__page-link"
              onClick={() => setCurrentPage("About")}
            >
              About
            </Link>
          </li>
          <li className="nav__links__ul-li">
            <Link
              to="/pages/vehicles"
              className="nav__page-link"
              onClick={() => setCurrentPage("Vehicle Models")}
            >
              Vehicle Models
            </Link>
          </li>
          <li className="nav__links__ul-li">
            <Link
              to="/pages/testimonials"
              className="nav__page-link"
              onClick={() => setCurrentPage("Testimonials")}
            >
              Testimonials
            </Link>
          </li>
          <li className="nav__links__ul-li">
            <Link
              to="/pages/ourTeam"
              className="nav__page-link"
              onClick={() => setCurrentPage("Our Team")}
            >
              Our Team
            </Link>
          </li>
          <li className="nav__links__ul-li">
            <Link
              to="/pages/contact"
              className="nav__page-link"
              onClick={() => setCurrentPage("Contact")}
            >
              Contact
            </Link>
          </li>

          <li className="nav__links__ul-li">
            <Link to="/user/signIn" className="nav__user-link">
              Sign In
            </Link>
          </li>
          <li className="nav__links__ul-li">
            <Link to="/user/register" className="nav__user-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
