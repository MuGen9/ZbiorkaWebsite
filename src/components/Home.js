import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeHeader from './Home/HomeHeader';
import HomeThreeColumns from "./Home/HomeThreeColumns";
import HomeSteps from "./Home/HomeSteps";
import HomeAbout from "./Home/HomeAbout";
import HomeHelpWho from "./Home/HomeHelpWho";
import HomeContact from "./Home/HomeContact";

function Home() {
    return (
      <div className="home">
        <HomeHeader />
        <HomeThreeColumns />
        <HomeSteps />
        <HomeAbout id="section1" />
        <HomeHelpWho id="section2" />
        <HomeContact id="section3" />
        <Link to="/about">About</Link>
      </div>
    );
  }
  
  export default Home;
  