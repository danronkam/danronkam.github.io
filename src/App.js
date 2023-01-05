import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import TLDR from "./components/Tldr";
import AboutPage from "./components/Aboutpage";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <>
    <div className="page-container">
      <h1>test</h1>

      <Switch>
        <Route exact path="/tldr">
          <TLDR/>
        </Route>
        <Route exact path="/about">
          <AboutPage/>
        </Route>
        <Route exact path="/contact">
          <ContactPage/>
        </Route>
        <Route exact path="/projects">
          <ProjectPage />
        </Route>
        <Route exact path="/projects/heard">

        </Route>
        <Route exact path="/projects/derailed">

        </Route>
        <Route exact path="/projects/dkfm">
          
        </Route>

        <Route exact path="/">
          <MainPage />
        </Route>

        <Redirect to='/' />

      </Switch>
    </div>
    
    </>
    
  );
}

export default App;
