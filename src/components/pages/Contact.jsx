import HeroPages from "../components/HeroPages";
import ContactComponent from "../components/ContactComponent";
import Banner from "../components/Banner";

const Contact = () => {
  return (
    <div>
      <h1>hey i am Contact page</h1>
      <HeroPages name="Contact" />
      <ContactComponent />
      <Banner />
    </div>
  );
};

export default Contact;
