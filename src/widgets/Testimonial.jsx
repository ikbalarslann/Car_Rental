import Testomonial_Data from "../store/TestomonialData";

const Testimonial = () => {
  return (
    <div className="testomonial">
      <h2 className="testomonial__title">hey i am Testimonial component</h2>
      <h4 className="testomonial__subtitle">Reviewed by People</h4>
      <h1 className="testomonial__main-title">Client's Testimonials</h1>
      <p className="testomonial__description">
        Discover the positive impact we've made on our clients by reading
        through their <br />
        testimonials. Our clients have experienced our service and results, and
        they're eager to share <br />
        their positive experiences with you.
      </p>
      <div>
        {Testomonial_Data.map((element, index) => (
          <div key={index} className="testomonial-item">
            <p className="testomonial-item__review">{element.review}</p>
            <img
              src={element.img}
              alt="Client"
              className="testomonial-item__image"
            />
            <h4 className="testomonial-item__name">{element.name}</h4>
            <p className="testomonial-item__location">{element.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
