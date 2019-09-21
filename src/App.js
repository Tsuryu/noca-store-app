import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./app.css";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import AppMessage from "./components/AppMessage";

class App extends React.Component {
  render() {
    const wrapperWeb = <div>
      
      <BrowserRouter>
        <Nav/>
        <AppMessage></AppMessage>
        <div className="container">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={RegisterForm} />
            <Route path="/" exact component={LoginForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>;

    const wrapperMobile = <div>
      <HashRouter>
        <Nav/>
        <div className="container">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={RegisterForm} />
            <Route path="/" exact component={LoginForm} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </div>;

    return (
      !window.Cordova ? wrapperWeb : wrapperMobile
    );
  }
}

export default App;
