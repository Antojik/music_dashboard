import "./App.css";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Header from "./navbar/Header";
import SignIn from "./sign_in/SignIn";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>

          <Route path="/sign_in">
            <SignIn/>
          </Route>

          <Route path="*">
            <Redirect to="/dashboard" push={true}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
