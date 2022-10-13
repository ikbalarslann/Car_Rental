import BookCar from "../widgets/BookCar";
import Hero from "../components/Hero";
import PlanTrip from "../widgets/PlanTrip";
import PickCar from "../widgets/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../widgets/ChooseUs";
import Testimonials from "../widgets/Testimonial";
import Faq from "../widgets/Faq";
import Downland from "../widgets/Download";

const Home = () => {
  return (
    <div>
      <Hero />
      <BookCar />
      <PlanTrip />
      <PickCar />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Downland />
    </div>
  );
};

export default Home;
