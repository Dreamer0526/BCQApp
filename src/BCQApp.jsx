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

    this.state = {
      userSelf: {},
      userStatus: ''
    }
  }

  componentWillMount() {
    fetch('/self')
    .then(result => result.json())
    .then(result => {
      this.setState({ userSelf: result })
    }).catch(console.error)

    fetch('/status')
    .then(result => result.json())
    .then(result => {
      this.setState({ userStatus: result.status })
    }).catch(console.error)
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
              return <Approval status={this.state.userStatus}/>
            }}/>
            <Route path={'/update'} render={ () => {
              return <Update user={this.state.userSelf}/>
            }}/>
          </main>
          {/* modal here */}
        </div>
      </HashRouter>
    );
  }
}

export default BCQApp;
