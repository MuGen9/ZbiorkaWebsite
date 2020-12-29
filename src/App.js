import React, { useEffect, useReducer, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register';
import LogOut from './components/LogOut';
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


  const updateMediaQuery = (match) => {
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
  });

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
              <Home items={links} />
            </Route>
            <Route path="/logowanie" >
              <LogIn />
            </Route>
            <Route path="/rejestracja" >
              <Register />
            </Route>
            <Route path="/wylogowano" >
              <LogOut />
            </Route>
          </Switch>
        </Router>
      </ViewContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
