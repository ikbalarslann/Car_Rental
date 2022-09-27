import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Pages = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Pages;
