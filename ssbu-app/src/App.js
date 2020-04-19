import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Character from "./components/Character";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route path="/:name" component={Character} />
          <Route exact path="/404" component={PageNotFound}></Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
