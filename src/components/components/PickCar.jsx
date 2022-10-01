const PickCar = () => {
  return (
    <div className="pick">
      <h2>hey i am Pick Car component</h2>
      <h3>Vehicle Models</h3>
      <h1>Our rental fleet</h1>
      <p>
        choose from a variety of our amazing vehicles to rent for your next{" "}
        <br /> adventure or business trip
      </p>
      <div className="pick__choose">
        <div className="pick__choose-choose">
          <div>Audi A1 S-Line</div>
          <div>VW Golf 6</div>
          <div>Toyota Camry</div>
          <div>BMW 320 ModernLine</div>
          <div>Mercedes-Benz GLK</div>
          <div>VW Passat CC</div>
        </div>
        <img src="" alt="car image" />
        <div className="pick__choose-info">
          <table>
            <thead>
              <tr>
                <th>Header 1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Model</td>
                <td>Audi</td>
              </tr>
              <tr>
                <td>Mark</td>
                <td>A1</td>
              </tr>
              <tr>
                <td>Year</td>
                <td>2012</td>
              </tr>
              <tr>
                <td>Doors</td>
                <td>4/5</td>
              </tr>
              <tr>
                <td>AC</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Transmission</td>
                <td>Manual</td>
              </tr>
              <tr>
                <td>Fuel</td>
                <td>Gasoline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PickCar;
