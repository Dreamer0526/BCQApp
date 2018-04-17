import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Application from './Application/Application';
import Consent from './Consent/Consent';
import logo from './logo.svg';
import './BCQApp.css';

class BCQApp extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          {/* sidebar here */}
          <main>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <Switch>
              <Route path='/application' render={ () => {
                return <Application/>
              }}/>
              <Route path='/consent' render={ () => {
                return <Consent/>
              }}/>
            </Switch>
          </main>
          {/* modal here */}
        </div>
      </HashRouter>
    );
  }
}

export default BCQApp;
