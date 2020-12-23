import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeHeader from './Home/HomeHeader';
import HomeThreeColumns from "./Home/HomeThreeColumns";
import HomeStepsHeader from "./Home/HomeStepsHeader";
import HomeStepsTiles from "./Home/HomeStepsTiles";
import HomeHelpWho from "./Home/HomeHelpWho";
import HomeContact from "./Home/HomeContact";
import HomeSingleButton from "./Home/HomeSingleButton";
import HomeFooterMobile from "./Home/HomeFooterMobile";

function HomeMobile() {
    return (
      <div className="home">
        <HomeHeader />
        <HomeThreeColumns />
        <HomeStepsHeader />
        <HomeStepsTiles />
        <HomeHelpWho id="section2" />
        <HomeSingleButton content={'Załóż konto'} redirect={'/rejestracja'} />
        <HomeFooterMobile />
      </div>
    );
  }
  
  export default HomeMobile;