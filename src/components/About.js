import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function About() {
    return (
      <div className="About">
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
  
  export default About;
  