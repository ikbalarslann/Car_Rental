import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../widgets/Footer";

const Default = () => {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div className="content">
      <NavBar setCurrentPage={setCurrentPage} />
      <div className="page-wrapper">
        <Outlet context={[currentPage, setCurrentPage]} />
      </div>
      <Footer />
    </div>
  );
};

export default Default;
