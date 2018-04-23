import React, { Component } from 'react';
import {
  HashRouter, Route
} from 'react-router-dom';
import Application from './Application/Application';
import Approval from './Approval/Approval';
import Update from './Update/Update';
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
