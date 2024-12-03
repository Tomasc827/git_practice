import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";
import Body from "./components/body";

const App = () => {
  return (
    <>
      <ErrorServer />
      <Outlet />
      <Body/>
    </>
  );
};

export default App;
