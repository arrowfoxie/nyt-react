import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Articles from "./pages/Articles";
import Saved from "./pages/Saved";
import Nav from "./components/Navbar/Navbar.js";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Nav />

          <Route exact path="/" component={Articles} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/saved" component={Saved} />
   
      </div>
    </Router>
    );
  }
}

export default App;
