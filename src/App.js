import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

import TLDR from "./components/Tldr";
import Homepage from "./components/homepage";
import Guestbook from "./components/Guestbook";
import Navbar from "./components/navbar";
import Blogposts from "./components/Blog";
import { initializeApp } from 'firebase/app';
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'




function App() {
  return (
    <>
    <div className="nav-container">
      <Navbar />
    </div>
    <div className="page-container">
      <Switch>

        <Route exact path="/">
          <TLDR />
        </Route>

        <Route exact path="/sp">
          <Homepage />
        </Route>

        <Route exact path='/guestbook'>
          <Guestbook />
        </Route>

        <Route exact path='/blog'>
          <Blogposts />
        </Route>

        <Redirect to='/' />

      </Switch>
    </div>
    
    </>
    
  );
}

export default App;
