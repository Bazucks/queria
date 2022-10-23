import React, { useEffect } from "react";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Hero from "./components/Hero";
import LandCTA from "./components/LandCTA";
// import Perks from "./components/Perks";
import Support from "./components/Support";
import SExpertise from "./components/ServiceComps/SExpertise";
import Trustproof from "./components/Trustproof";
import ReactGA from "react-ga";


function App() {
  useEffect(()=> {
    ReactGA.initialize("UA-243068835-1");

    ReactGA.pageview('/')
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <SExpertise />
      <Trustproof />
      <LandCTA />
    </div>
  );
}

export default App;
