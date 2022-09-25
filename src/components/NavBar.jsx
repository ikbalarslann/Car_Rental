const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">Car Rental</div>
      <div className="nav__Links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Vehicle Models</a>
        <a href="">Testimonials</a>
        <a href="">Our Team</a>
        <a href="">Contact</a>
      </div>
      <div className="nav__Login">
        <button className="nav__Login__button-signIn">Sign In</button>
        <button className="nav__Login__button-register">Register</button>
      </div>
    </div>
  );
};

export default NavBar;
