import Testomonial_Data from "../store/TestomonialData";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Desc from "../components/Desc";
const Testimonial = () => {
  return (
    <div className="testomonial">
      <SubTitle subtitle="Reviewed by People" />
      <Title title="Client's Testimonials" />
      <Desc
        desc=" Discover the positive impact we've made on our clients by reading
        through their <br />
        testimonials. Our clients have experienced our service and results, and
        they're eager to share <br />
        their positive experiences with you."
      />
      <div>
        {Testomonial_Data.map((element, index) => (
          <div key={index} className="testomonial-item">
            <p className="testomonial-item__review">{element.review}</p>
            <img
              src={element.img}
              alt="Client"
              className="testomonial-item__image"
            />
            <SubTitle subtitle={element.name} />
            <Desc desc={element.location} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
