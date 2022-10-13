import { useState } from "react";
import Link from "../components/Link";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email } = formData;

    console.log(`Email: ${email}`);
  };

  return (
    <footer className="footer">
      <div className="footer__contact">
        <h2>
          <strong>Car</strong> Rental
        </h2>
        <p>
          We offers a big range of vehicles for all your driving needs. We have
          the perfect car to meet your needs.
        </p>
        <Link content="FGDS" />
        <Link content="(123) - 456-789" href="tel:(123)-456-789" />
        <Link content="carrental@gmail.com" href="mailto:carrental@gmail.com" />
      </div>
      <div className="footer__company">
        <h2>Company</h2>
        <Link content="New York" />
        <Link content="Careers" />
        <Link content="Mobile" />
        <Link content="Blog" />
        <Link content="How We Work" />
      </div>
      <div className="footer__hours">
        <h2>Working Hours</h2>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 7:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="footer__subs">
        <h2>Subscription</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
        <form className="footer__form" onSubmit={handleSubmit}>
          <div className="footer__form-group">
            <label htmlFor="email" className="footer__form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="footer__form-input"
            />
          </div>
          <div>
            <button className="footer__form-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
