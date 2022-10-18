import BgShape from "../assets/img/hero/hero-bg.png";

const Hero = () => {
  return (
    <div className="hero">
      <img className="bg-shape" src={BgShape} alt="bg-shape" />
      <div className="hero__ad">
        <h2 className="hero__ad-title">Plan your trip now</h2>
        <h1 className="hero__ad-heading">
          Save <strong className="hero__ad-strong">big</strong> with our car
          rental
        </h1>

        <p className="hero__ad-text">
          Rent the car of your dreams. Unbeatable prices. Unlimited miles.
          <br />
          Flexible pick-up options and much more.
        </p>

        <div className="hero__buttons">
          <button className="hero__button">Book Ride</button>
          <button className="hero__button">Learn More</button>
        </div>
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
