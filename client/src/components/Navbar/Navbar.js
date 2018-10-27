import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="/">NYT React App</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarText">
  <ul className="navbar-nav mr-auto">

  </ul>
 <button className="btn">
  <Link to="/saved">Saved Articles</Link></button>
  <button className="btn">
  <Link to="/"> Search Articles</Link></button>
</div>
    </nav>)
    ;
    
}
    
}
export default Navbar;