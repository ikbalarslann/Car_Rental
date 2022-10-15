import { Link } from "react-router-dom";

const HeroPages = ({ name }) => {
  return (
    <div className="heroPages">
      <h1 className="heroPages__subtitle">{name}</h1>
      <h3 className="heroPages__breadcrumb">
        <Link to="/" className="heroPages__breadcrumb-link">
          Home
        </Link>
        /{name}
      </h3>
    </div>
  );
};
export default HeroPages;
