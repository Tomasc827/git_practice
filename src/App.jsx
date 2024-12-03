import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <ErrorServer />
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;
