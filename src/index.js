import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';


function Root() {
  return(
    <HashRouter>
      <App></App>
    </HashRouter>

  )
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
