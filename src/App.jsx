import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import LoginPage from "./components/login_page/LoginPage"
import Registration from "./components/Registration/Registration";

function AppFunction(){
const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/registration" element={<Registration/>}/>
    </Routes>
  )
}




const App = () => {

return (
  <BrowserRouter>
    <AppFunction/>
  </BrowserRouter>
)

}

export default App