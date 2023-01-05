import React from "react";
import { Switch, Route } from "react-router-dom";
import TLDR from "./components/Tldr";

function App() {
  return (
    <>
    <div className="page-container">
      <h1>test</h1>

      <Switch>
        <Route exact path="tldr">
          <TLDR/>
        </Route>


      </Switch>
    </div>
    
    </>
    
  );
}

export default App;
