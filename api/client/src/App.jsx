import React from "react";
import Home from "./Pages/Home";
import "./app.scss";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Faq from "./Pages/Faq";
import ParticlesBackground from "./Pages/particle.js";
// import Bottombar from "./Components/Bottombar";
// import Topbar from "./Components/Topbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sell from "./Pages/Sell/Sell";
import Buy from "./Pages/Buy/Buy.jsx";

export default function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/sell">
            <Sell />
          </Route>
          <Route path="/buy">
            <Buy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
