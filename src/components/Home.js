import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeHeader from './Home/HomeHeader';
import HomeThreeColumns from "./Home/HomeThreeColumns";
import HomeStepsHeader from "./Home/HomeStepsHeader";
import HomeStepsTiles from "./Home/HomeStepsTiles";
import HomeAbout from "./Home/HomeAbout";
import HomeHelpWho from "./Home/HomeHelpWho";
import HomeContact from "./Home/HomeContact";
import HomeGiveawayButton from "./Home/HomeGiveawayButton";

function Home() {
    return (
      <div className="home">
        <HomeHeader />
        <HomeThreeColumns />
        <HomeStepsHeader />
        <HomeStepsTiles />
        <HomeGiveawayButton />
        <HomeAbout />
        <HomeHelpWho id="section2" />
        <HomeContact id="section3" />
        <Link to="/about">About</Link>
      </div>
    );
  }
  
  export default Home;
  