import "./App.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Header from "./navbar/Header";
import LeftBar from "./default_components/LeftBar";
import SignIn from "./sign_in/SignIn";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./default_components/Footer";

const App = () => {
  return (
    <div className="App row">
      <LeftBar />

      <div className="col-md-11" style={{ padding: "0" }}>
        <Router>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/sign_in">
              <SignIn />
            </Route>

            <Route path="*">
              <Redirect to="/dashboard" push={true} />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
