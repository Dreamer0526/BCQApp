import React, { Component } from 'react'
import {
  HashRouter, Route, DefaultRoute
} from 'react-router-dom'
import history from './history'
import Home from './App/Home/Home'
import Application from './App/Application/Application'
import Approval from './App/Approval/Approval'
import Update from './App/Update/Update'
import './BCQApp.css'

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
    }).catch(error => {
      console.error      
    })

    fetch('/status')
    .then(result => result.json())
    .then(result => {
      this.setState({ userStatus: result.status })
    }).catch(error => {
      console.error
    })
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <main class="app-content">
            <Route path='/' exact render={() => {
              return <Home name={this.state.userSelf.name} status={this.state.userStatus}/>
            }}/>
            <Route path='/application' render={ ({history}) => {
              return <Application history={history} name={this.state.userSelf.name} status={this.state.userStatus}/>
            }}/>
            <Route path='/approval' render={ (history) => {
              return <Approval name={this.state.userSelf.name} history={history} status={this.state.userStatus}/>
            }}/>
            <Route path={'/update'} render={ (history) => {
              return <Update user={this.state.userSelf} history={history} name={this.state.userSelf.name} status={this.state.userStatus}/>
            }}/>
          </main>
          <footer className='dbl-margin-bottom app-footer'>
            <img src={require('./Common/static/ETHEREUM.png')} className='img-20'/>
            <p>Powered by Ethereum</p>
          </footer>
        </div>
      </HashRouter>
    );
  }
}

export default BCQApp;
