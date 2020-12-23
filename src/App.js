import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import HomeMobile from './components/HomeMobile';
import About from './components/About';
import reducer, {initialState} from './reducer';

function App() {
  const [isMobile, dispatchMobile] = useReducer(reducer, initialState);


  const updateViewPortData = () =>{
    if (window.screen.width > 650) {
        dispatchMobile({
          type: "SET_DESKTOP"
        });
        console.log(isMobile);
    } else {
        dispatchMobile({
          type: "SET_MOBILE"
        });
        console.log(isMobile);
    }
  }


  const updateMediaQuery= (match) =>{
    if(match.matches){
      updateViewPortData();
    }else{
      updateViewPortData();
    }
    return match;
  }

  useEffect(() => {
    // updateViewPortData();
    // window.addEventListener("resize", updateViewPortData);
    // return () => window.removeEventListener("resize", updateViewPortData);
    const match = window.matchMedia("(min-width: 650px)");
    console.log(match);
    updateMediaQuery(match);
    match.addListener(updateMediaQuery)
    console.log(window.screen.width);
    console.log(isMobile);
  }, []);

  const links = [
    { title: "", url: ""},
  ]

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          {/* {isMobile ? <HomeMobile items={links}/> : <Home items={links}/>} */}
          <Home items={links}/>
        </Route>
        <Route path="/about" >
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
