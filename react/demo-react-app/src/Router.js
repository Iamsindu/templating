import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Team from "./Containers/Team";

export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/team" component={Team} />
          <Route path="/" component= {Home} /> 
        </Switch>
    </BrowserRouter>
  );
}