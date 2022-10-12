import Title from "../components/Title";
import Desc from "../components/Desc";

const Downland = () => {
  return (
    <div className="downland">
      <div className="downland__content">
        <Title title="Download our app to get <br /> most out of it" />
        <Desc
          desc="Thrown shy denote ten ladies though ask saw. Or by to he going think
          order event music. Incommode so intention defective at convinced. Led
          income months itself and houses you."
        />

        <div className="downland__stores">
          <img src="" alt="play Store" className="downland__store-image" />
          <img src="" alt="app Store" className="downland__store-image" />
        </div>
      </div>
      <img src="" alt="phone photo" className="downland__phone-image" />
    </div>
  );
};
export default Downland;
