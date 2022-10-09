import { Link } from "react-router-dom";

const NavBar = ({ setCurrentPage }) => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link className="nav__logo" to="/">
          Car Rental
        </Link>
      </div>
      <div className="nav__pages">
        <Link to="/pages/home" onClick={() => setCurrentPage("Home")}>
          Home
        </Link>
        <Link to="/pages/about" onClick={() => setCurrentPage("About")}>
          About
        </Link>
        <Link
          to="/pages/vehicles"
          onClick={() => setCurrentPage(" Vehicle Models")}
        >
          Vehicle Models
        </Link>
        <Link
          to="/pages/testimonials"
          onClick={() => setCurrentPage("Testimonials")}
        >
          Testimonials
        </Link>
        <Link to="/pages/ourTeam" onClick={() => setCurrentPage("Our Team")}>
          Our Team
        </Link>
        <Link to="/pages/contact" onClick={() => setCurrentPage("Contact")}>
          Contact
        </Link>
      </div>
      <div className="nav__user">
        <Link to="/user/signIn">Sign In</Link>

        <Link to="/user/register">Register</Link>
      </div>
    </div>
  );
};

export default NavBar;
