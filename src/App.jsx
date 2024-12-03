import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";
import Body from "./components/body";

import Header from "./components/Header";


import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Header></Header>
      <ErrorServer />
      <Outlet />
      <Body/>
      <Footer/>

    </>
  );
};

export default App;
