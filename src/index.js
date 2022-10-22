import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tos from "./components/Tos";
import Management from "./components/Management";
import Seo from "./components/Seo";
import Copy from "./components/Copy";
import Advertising from "./components/Advertising";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Form from "./components/Form";
import GD from "./components/GD";
import ClientError404 from "./components/ClientError404";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-243068835-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="*" element={<ClientError404 />} />
      <Route path="/" element={<App />} />
      <Route path="/tos" element={<Tos />} />
      <Route path="/sm-advertising" element={<Advertising />} />
      <Route path="/copywriting" element={<Copy />} />
      <Route path="/seo" element={<Seo />} />
      <Route path="/sm-management" element={<Management />} />
      <Route path="/graphic-design" element={<GD />} />
      <Route path="/form" element={<Form />} />
      <Route path="/faq" element={<Faq />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
