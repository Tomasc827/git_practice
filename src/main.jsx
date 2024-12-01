import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PetProviders } from "./components/PetContext.jsx";
import NotFound from "./components/NotFound.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <PetProviders>
      <Routes>
     <Route path="/" element={<App/>}>
     
    </Route>
      <Route path="*" element={<NotFound/>}/>  
      </Routes>
      </PetProviders>
    </BrowserRouter>
  </StrictMode>
);
