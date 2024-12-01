import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorServer from "./components/ErrorServer";


const App = () => {
  return ( <>
          <Navbar/>
          <ErrorServer/>
          <Outlet/>
  </> );
}
 
export default App;