const Stat = ({ value, label }) => {
  return (
    <div className="aboutCompany__stat">
      <img src="" alt="icon" className="aboutCompany__stat-icon" />
      <div className="aboutCompany__stat-details">
        <h1 className="aboutCompany__stat-value">{value}</h1>
        <p className="aboutCompany__stat-label">{label}</p>
      </div>
    </div>
  );
};
export default Stat;
