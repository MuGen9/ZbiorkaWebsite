import React, { useEffect, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import HomeMobile from './components/HomeMobile';
import About from './components/About';
import reducer, {initialState} from './reducer';

export const ViewContext = createContext();
export const UserContext = createContext();

function App() {
  const [isMobile, dispatchMobile] = useReducer(reducer, initialState);


  const updateViewPortData = () =>{
    if (window.screen.width > 650) {
        dispatchMobile({
          type: "SET_DESKTOP"
        });
    } else {
        dispatchMobile({
          type: "SET_MOBILE"
        });
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
  console.log(isMobile);

  
  // const homeView = isMobile ? <HomeMobile items={links}/> : <Home items={links}/>;

  return (
    <UserContext.Provider value={{user: null}}>
      <ViewContext.Provider value={ {state: isMobile, dispatchMobile} }>
        <Router>
          <Switch>
            <Route exact path="/" >
            
              <Home items={links}/>
            </Route>
            <Route path="/about" >
              <About/>
            </Route>
          </Switch>
        </Router>
      </ViewContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
