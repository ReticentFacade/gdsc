import React from "react";
import "./css/App.css";
import NavbarFunction from "./components/Navbar/Navbar.js";
import Home from "./pages/Home";
import PreviousWork from "./pages/PreviousWork";
import HowItWorks from "./pages/HowItWorks";
import OurWork from "./pages/OurWork";
import StartJourney from "./pages/StartJourney";
import DarkMode from "./components/DarkMode/DarkMode";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <NavbarFunction />

            {/* <Routes>
            <Route path="/" element={ <Home /> }/ >
            <Route path="previous-work" element={ <PreviousWork /> } />
            <Route path="how-it-works" element={ <HowItWorks /> } />
            <Route path="our-work" element={ <OurWork /> } />
            <Route path="start-journey" element={ <StartJourney />} />
          </Routes> */}
            <Home />
            <HowItWorks />
            <PreviousWork />
            <OurWork />
            <StartJourney />
        </div>
    );
}

export default App;
