import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import HomeMobile from './components/HomeMobile';
import About from './components/About';
import { useDataLayerValue } from "./DataLayer";

function App() {
  const [{ mobile }, dispatch] = useDataLayerValue();

  useEffect(() => {
    if (window.screen.width > 540) {
        dispatch({
          type: "SET_MOBILE",
          mobile: false
        });
    } else {
      dispatch({
        type: "SET_MOBILE",
        mobile: true
      });
    }
    console.log(window.screen.width);
  }, [window.screen.width]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          {mobile ? <HomeMobile/> : <Home />}
        </Route>
        <Route path="/about" >
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
