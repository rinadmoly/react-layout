import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from "./components/Menu/Menu"
import App from "./App"
import About from "./components/About/About"
import HeaderTop from "./components/headerTop/HeaderTop"
import Project from "./components/Project/Project"
import Download from "./components/Download/Download"
import Contacts from "./components/Contacts/Contacts"
import * as serviceWorker from './serviceWorker';

import {Router, Route} from "react-router"
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <HeaderTop/>
    <Menu/>
    <Route path='/Home' component={App} exact></Route>
      <Route path='/About' component={About} exact></Route>
      <Route path='/Project' component={Project} exact></Route>
      <Route path='/Download' component={Download} exact></Route>
   <Contacts/>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
