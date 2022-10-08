const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__ad">
        <h2 className="hero__title">Hey, I am hero component</h2>
        <h2 className="hero__subtitle">Plan your trip now</h2>
        <h1 className="hero__main-title">
          Save <b className="hero__highlight">big</b> with our car rental
        </h1>
        <p className="hero__description">
          Rent the car of your dreams. Unbeatable prices. Unlimited miles.
          <br />
          Flexible pick-up options and much more.
        </p>
        <button className="hero__button">Book Ride</button>
        <button className="hero__button">Learn More</button>
      </div>
      <div className="hero__img">
        <img
          className="hero__image"
          src="https://car-rental-ten.vercel.app/static/media/main-car.9b30faa59387879fa060.png"
          alt="car photo"
        />
      </div>
    </div>
  );
};
export default Hero;
