import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <switch>
            <Route exact path="/" component={Home} />
            <Route path="/Saved" component={Saved} />
          </switch>
        </Router>
      </div>
    );
  }
}

export default App;
