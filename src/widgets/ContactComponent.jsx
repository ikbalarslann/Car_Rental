const ContactComponent = () => {
  const handleSubmit = (e) => {
    e.preventSubmit;
  };
  return (
    <div className="contactComponent">
      <h1 className="contactComponent__title">Hey, I am contact component</h1>
      <div className="contactComponent__info">
        <h2 className="contactComponent__info-title">
          Need additional information?
        </h2>
        <p className="contactComponent__info-description">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <a href="tel:(123) 456-7869" className="contactComponent__info-phone">
          (123) 456-7869
        </a>
        <a
          href="mailto:carrental@carmail.com"
          className="contactComponent__info-email"
        >
          carrental@carmail.com
        </a>
        <a href="#" className="contactComponent__info-location">
          Istanbul/Turkey
        </a>
      </div>
      <div className="contactComponent__form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullName" className="contactComponent__form-label">
            Full Name
          </label>
          <input type="text" className="contactComponent__form-input" />
          <label htmlFor="email" className="contactComponent__form-label">
            Email
          </label>
          <input type="text" className="contactComponent__form-input" />
          <label htmlFor="tellUs" className="contactComponent__form-label">
            Tell us about it
          </label>
          <input type="text" className="contactComponent__form-input" />
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
