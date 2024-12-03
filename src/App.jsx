import { Outlet } from "react-router-dom";
import ErrorServer from "./components/ErrorServer";

const App = () => {
  return (
    <>
      <ErrorServer />
      <Outlet />
    </>
  );
};

export default App;
