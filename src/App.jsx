import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";

import Header from "./components/Header";


import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header></Header>
      <ErrorServer />
      <Outlet />
      <Footer/>
    </>
  );
};

export default App;
