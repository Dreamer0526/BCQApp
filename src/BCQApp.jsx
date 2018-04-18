import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import Application from './Application/Application';
import Approval from './Approval/Approval';
// import logo from './logo.svg';
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
            <Switch>
              <Route path='/application' render={ () => {
                return <Application/>
              }}/>
              <Route path='/approval' render={ () => {
                return <Approval/>
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
