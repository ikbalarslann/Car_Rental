import SubTitle from "../components/chunks/SubTitle";
import Desc from "../components/chunks/Desc";
import Link from "../components/chunks/Link";

const ContactComponent = () => {
  const handleSubmit = (e) => {
    e.preventSubmit;
  };
  return (
    <div className="contactComponent">
      <div className="contactComponent__info">
        <SubTitle subtitle=" Need additional information?" />
        <Desc
          desc=" A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience."
        />
        <Link content="(123) 456-7869" href="tel:(123) 456-7869" />
        <Link
          content="carrental@carmail.com"
          href="mailto:carrental@carmail.com"
        />
        <Link content="Istanbul/Turkey" />
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
