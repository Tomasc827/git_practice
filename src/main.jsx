import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookProviders } from "./components/TeamContext.jsx";
import NotFound from "./components/NotFound.jsx";
import Homepage from "./components/Homepage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BookProviders>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />}>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BookProviders>
    </BrowserRouter>
  </StrictMode>
);
