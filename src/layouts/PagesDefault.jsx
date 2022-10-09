import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import HeroPages from "../components/HeroPages";
import Banner from "../components/Banner";

const PagesDefault = () => {
  const [currentPage, setCurrentPage] = useOutletContext();

  return (
    <div>
      <HeroPages name={currentPage} />
      <Outlet />
      <Banner />
    </div>
  );
};

export default PagesDefault;
