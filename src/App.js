import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import TLDR from "./components/Tldr";
import Homepage from "./components/homepage";


function App() {
  return (
    <>
    <div className="page-container">
      <Switch>

        <Route exact path="/">
          <TLDR />
        </Route>

        <Route exact path="/sp">
          <Homepage />
        </Route>

        <Redirect to='/' />

      </Switch>
    </div>
    
    </>
    
  );
}

export default App;
