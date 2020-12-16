import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
    return (
      <div className="Home">
        <h1>Home</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
  
  export default Home;
  