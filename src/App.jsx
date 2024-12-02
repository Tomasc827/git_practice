import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorServer from "./components/ErrorServer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <ErrorServer />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
