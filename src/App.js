import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import DetailPage from "./pages/detailPage/detailPage";
function App() {
  return (
      <div className={'wrapper'}>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path='**'  component={LandingPage}></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
