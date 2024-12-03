import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";
import Header from "./components/Header";


const App = () => {
  return (
    <>
    <Header></Header>
      <ErrorServer />
      <Outlet />
    </>
  );
};

export default App;
