import Card from "../components/Card";
import Button from "../components/Button";
const ChooseUs = () => {
  return (
    <div className="chooseUs">
      <h2 className="chooseUs__title">hey i am Choose us component</h2>
      <img src="" alt="choose us image" className="chooseUs__image" />
      <div className="chooseUs__content">
        <h4 className="chooseUs__subtitle">Why Choose Us</h4>
        <h1 className="chooseUs__main-title">
          Best valued deals you will ever find
        </h1>
        <p className="chooseUs__description">
          Discover the best deals you'll ever find with our unbeatable offers.
          we're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big.
        </p>

        <Button content="Find Details" />
      </div>
      <div className="chooseUs__features">
        <Card
          title="Cross Country Drive"
          desc="Take your driving experience to the next level with our top-notch
              vehicles for your cross-country adventures."
        />
        <Card
          title="All Inclusive Pricing"
          desc=" Get everything you need in one convenient, transparent price with
              our all-inclusive pricing policy."
        />
        <Card
          title="No Hidden Charges"
          desc="Enjoy peace of mind with our no hidden charges policy. We believe
              in transparent and honest pricing."
        />
      </div>
    </div>
  );
};
export default ChooseUs;
