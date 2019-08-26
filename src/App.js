import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
