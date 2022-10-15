import SubTitle from "./chunks/SubTitle";
import Title from "./chunks/Title";
import Desc from "./chunks/Desc";
import Button from "./chunks/Button";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__ad">
        <SubTitle subtitle="Plan your trip now" />
        <Title title="Save big with our car rental" />
        <Desc
          desc="Rent the car of your dreams. Unbeatable prices. Unlimited miles.
          <br />
          Flexible pick-up options and much more."
        />
        <div className="hero__buttons">
          <Button content="Book Ride" />
          <Button content="Learn More" />
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
