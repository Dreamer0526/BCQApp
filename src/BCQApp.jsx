import React, { Component } from 'react';
import {
  HashRouter, Route
} from 'react-router-dom';
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
            <Route path='/application' render={ () => {
              return <Application/>
            }}/>
            <Route path='/approval' render={ () => {
              return <Approval/>
            }}/>
            <Route path={'/update/:id'} render={ () => {
              return <Update/>
            }}/>
          </main>
          {/* modal here */}
        </div>
      </HashRouter>
    );
  }
}

export default BCQApp;
