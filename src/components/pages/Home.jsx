import BookCar from "../components/BookCar";
import Hero from "../components/Hero";
import PlanTrip from "../components/PlanTrip";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonial";
import Faq from "../components/Faq";
import Downland from "../components/Download";

const Home = () => {
  return (
    <div>
      <h1>hey i am home page</h1>
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
