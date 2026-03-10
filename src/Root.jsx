import Navbar from "./Layouts/Navbar";
import { Outlet } from "react-router";
import Footer from "./Layouts/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
