import Card from "../components/Card";
import Button from "../components/Button";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Desc from "../components/Desc";
const ChooseUs = () => {
  return (
    <div className="chooseUs">
      <img src="" alt="choose us image" className="chooseUs__image" />
      <div className="chooseUs__content">
        <SubTitle subtitle="Why Choose Us" />
        <Title title="Best valued deals you will ever find" />
        <Desc
          desc="Discover the best deals you'll ever find with our unbeatable offers.
          we're dedicated to providing you with the best value for your money,
          so you can enjoy top-quality services and products without breaking
          the bank. Our deals are designed to give you the ultimate renting
          experience, so don't miss out on your chance to save big."
        />

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
