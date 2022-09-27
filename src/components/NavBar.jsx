import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <Link className="nav__logo" to="/">
          Car Rental
        </Link>
      </div>
      <div className="nav__pages">
        <Link to="/pages/home">Home</Link>
        <Link to="/pages/about">About</Link>
        <Link to="/pages/vehicles">Vehicle Models</Link>
        <Link to="/pages/testimonials">Testimonials</Link>
        <Link to="/pages/ourTeam">Our Team</Link>
        <Link to="/pages/contact">Contact</Link>
      </div>
      <div className="nav__user">
        <Link to="/user/signIn">Sign In</Link>

        <Link to="/user/register">Register</Link>
      </div>
    </div>
  );
};

export default NavBar;
