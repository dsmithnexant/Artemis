import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Models from "./containers/Models";
import NewNote from "./containers/NewNote";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/upload">
        <NewNote />
      </Route>
      <Route exact path="/Artemis">
        <Home />
      </Route>
      <Route exact path="/models">
        <Models />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}