import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateIgrediente from "./pages/CreateIngrediente";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";

export default function App() {
  return (
    <>
    {/* <Route component={ CreateIgrediente } path="/Adicionar"/> */}
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="container content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
