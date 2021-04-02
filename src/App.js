import iconSearch from "./Icons/search.svg";
import "./App.css";
import logoSite from "./Icons/LogoSite.png";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={logoSite} alt="Logo" width="45" />
          </a>
          <ul class="navbar-nav container-fluid" >
          <div style={{display: "flex", width: "50%", justifyContent: "space-between"}}>
            <li class="nav-item ">
              <a class="nav-link" href="#">
                Сайт говна
              </a>
            </li>
            <li class="nav-item ">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Введите исполнителя или название песни"
                  width="1000px"
                />
                <div class="input-group-append">
                  <button class="btn btn-light" type="button" id="govno">
                    <img src={iconSearch}/>
                  </button>
                </div>
              </div>
            </li>
            </div>
            <div style={{display: "flex", width: "50%", justifyContent: "flex-end"}}>
            <li class="nav-item " id="signIn">
              <a class="nav-link" href="#" >
                Sign in
              </a>
            </li>
            <li class="nav-item"  id="createAcc">
              <a class="nav-link" href="#">
                Create account
              </a>
            </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
