import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import About from "../containers/About";
import Service from "../containers/Services";
import Contact from "../containers/Contact";

export default function Routers() {
  return (
    <Router>
         <Switch>
            <Route exact path="/services" component={Service} /> 
            <Route path="/about" component={About} /> 
            <Route path="/contact" component={Contact} /> 
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}