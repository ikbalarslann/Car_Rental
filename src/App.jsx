import { Link } from "react-router-dom";
import "./scss/main.scss";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <hr />
      <nav>
        <ul>
          <li>
            <Link to="user">User page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
