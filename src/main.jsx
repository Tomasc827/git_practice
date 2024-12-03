import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Providers } from "./components/TeamContext.jsx";
import NotFound from "./components/NotFound.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path="/" element={<App />}>
           
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Providers>
    </BrowserRouter>
  </StrictMode>
);
