import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const Pages = () => {
  return (
    <div>
      <NavBar />

      <Outlet />
    </div>
  );
};

export default Pages;
