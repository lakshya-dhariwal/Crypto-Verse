import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import CryptoNews from "./components/CryptoNews.js";
import CryptoDetail from "./components/CryptoDetail.js";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/coin/:id/:ticker/:nameurl">
            <CryptoDetail />
          </Route>
          <Route exact path="/news">
            <CryptoNews />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
