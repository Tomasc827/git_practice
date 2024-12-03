import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";
import Body from "./components/Body";

import Header from "./components/Header";
import RandomNumberGenerator from "./components/Footer";

import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header></Header>
      <ErrorServer />
      <Outlet />
      <RandomNumberGenerator/>
      <Body/>
      <Footer/>

    </>
  );
};

export default App;
