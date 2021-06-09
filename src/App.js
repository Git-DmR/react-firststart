import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./components/route";
import CheckCounterPage from "../src/containers/CheckCounterContainer";
import RegisterPage from "../src/containers/RegisterContainer";
import LoginPage from "../src/containers/LoginContainer";
import HomePage from "../src/containers/HomeContainer";

import { root, register, checkCounter, home } from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={home} component={HomePage} />
          <Route path={register} component={RegisterPage} />
          <Route path={checkCounter} component={CheckCounterPage} />
          <Route path={root} component={LoginPage} />
          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
