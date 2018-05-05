import React, { Component } from 'react';
import {
  HashRouter, Route, DefaultRoute
} from 'react-router-dom';
import Home from './App/Home/Home';
import Application from './App/Application/Application';
import Approval from './App/Approval/Approval';
import Update from './App/Update/Update';
import './BCQApp.css';

class BCQApp extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          {/* sidebar here */}
          <main>
            {/* <header></header> */}
            <Route path='/' exact render={() => {
              return <Home/>
            }}/>
            <Route path='/application' render={ () => {
              return <Application/>
            }}/>
            <Route path='/approval' render={ () => {
              return <Approval/>
            }}/>
            <Route path={'/update'} render={ () => {
              return <Update username={'default'}/>
            }}/>
          </main>
          {/* modal here */}
        </div>
      </HashRouter>
    );
  }
}

export default BCQApp;
