import Title from "./Title";
import Desc from "./Desc";

const Stat = ({ value, label }) => {
  return (
    <div className="aboutCompany__stat">
      <img src="" alt="icon" className="aboutCompany__stat-icon" />
      <div className="aboutCompany__stat-details">
        <Title title={value} />
        <Desc desc={label} />
      </div>
    </div>
  );
};
export default Stat;
