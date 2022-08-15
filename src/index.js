import React from "react";
import ReactDOM from "react-dom/client";

import AppHeader from "./cmps/AppHeader";
import AppFooter from "./cmps/AppFooter";

import Homepage from "./pages/Homepage";
import Game from "./pages/Game";
import Cards from "./pages/Cards";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Homepage/>} />
          <Route path="cards" element={<Cards/>} />
          <Route path="game" element={<Game/>} />
        </Route>
      </Routes>

      <AppFooter />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
