import React, {useContext} from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeHeader from './Home/HomeHeader';
import HomeThreeColumns from "./Home/HomeThreeColumns";
import HomeStepsHeader from "./Home/HomeStepsHeader";
import HomeStepsTiles from "./Home/HomeStepsTiles";
import HomeHelpWho from "./Home/HomeHelpWho";
import HomeContact from "./Home/HomeContact";
import HomeAbout from "./Home/HomeAbout";
import HomeFooter from "./Home/HomeFooter";
import HomeHeaderTop from "./Home/HomeHeaderTop";
import HomeSingleButton from "./Home/HomeSingleButton";
import HomeFooterMobile from "./Home/HomeFooterMobile";
import {ViewContext} from "./../App";


function Home() {
    const {state: {isMobile}} = useContext(ViewContext);

    const desktopJSX = (
      <>
        <HomeHeaderTop />
        <HomeHeader />
        <HomeThreeColumns />
        <HomeStepsHeader />
        <HomeStepsTiles />
        <HomeSingleButton content={'Oddaj rzeczy'} redirect={'/logowanie'} />
        <HomeAbout />
        <HomeHelpWho />
        <HomeContact />
        <HomeFooter />
      </>
    )

    const mobileJSX = (
      <>
        <HomeHeader />
        <HomeThreeColumns />
        <HomeStepsHeader />
        <HomeStepsTiles />
        <HomeHelpWho />
        <HomeSingleButton content={'Załóż konto'} redirect={'/rejestracja'} />
        <HomeFooterMobile />
      </>
    )
    
    return (
      <div className="home">
        { isMobile ? mobileJSX : desktopJSX }
      </div>
    );
  }
  
  export default Home;
  