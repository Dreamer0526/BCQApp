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
      this.onFetchError()
    })

    fetch('/status')
    .then(result => result.json())
    .then(result => {
      this.setState({ userStatus: result.status })
    }).catch(error => {
      this.onFetchError()
    })
  }

  onFetchError() {
    this.setState({
      userSelf: {
        address: "0xa265911A9b8dfac9BBC9155AaE2E75fF2dB052Be",
        name: "name1",
        caCert: "-----BEGIN CERTIFICATE-----\nMIIEgDCCA2igAwIBAgIJANoSK+kLdYZHMA0GCSqGSIb3DQEBCwUAMIGGMQswCQYD\nVQQGEwJVUzETMBEGA1UECBMKQ2FsaWZvcm5pYTERMA8GA1UEBxMIU2FuIGpvc2Ux\nDjAMBgNVBAoTBUNpc2NvMQ4wDAYDVQQLEwVDaXNjbzESMBAGA1UEAxMJY2lzY28u\nY29tMRswGQYJKoZIhvcNAQkBFgxjYUBjaXNjby5jb20wHhcNMTgwNDEzMDgyMjMx\nWhcNMjEwMTMxMDgyMjMxWjCBhjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlm\nb3JuaWExETAPBgNVBAcTCFNhbiBqb3NlMQ4wDAYDVQQKEwVDaXNjbzEOMAwGA1UE\nCxMFQ2lzY28xEjAQBgNVBAMTCWNpc2NvLmNvbTEbMBkGCSqGSIb3DQEJARYMY2FA\nY2lzY28uY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyrE08ZS/\nb1lV9zJm0BsgEDH6VcSPZCOLUsyU9/qNJO11sbURpQKkN9tKMin7yoJ6NpOOxXth\nz5Tq2cURpXldhd3LMv5/uo7YspB2ZZvaOkZni9Tw+tI8oPaTK0hVvixc9ogFpp4M\nbddHZHb4h0nVf3/dSRV4yRIgaokmQZdmNTar+AmsbU3IMaYQiBpST/xrB7ocD/n9\n0bypPKGczGuyP95sGeplsj/1X360OxvG/5LyX7jy5e07JYZyc+6D2haiFYz94NSv\nDdE2IfGzj4aHkpGhVBJE/Pib59xoriFK/QTLkC4qEAenOVPqUZe7c95aBUW1y190\nWZVlv/LjMO149QIDAQABo4HuMIHrMB0GA1UdDgQWBBSU2p4rPCzQEVXnHk5y+TCr\n+jpxsjCBuwYDVR0jBIGzMIGwgBSU2p4rPCzQEVXnHk5y+TCr+jpxsqGBjKSBiTCB\nhjELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExETAPBgNVBAcTCFNh\nbiBqb3NlMQ4wDAYDVQQKEwVDaXNjbzEOMAwGA1UECxMFQ2lzY28xEjAQBgNVBAMT\nCWNpc2NvLmNvbTEbMBkGCSqGSIb3DQEJARYMY2FAY2lzY28uY29tggkA2hIr6Qt1\nhkcwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAQEAwjvGg6AosloyqvGi\ndv4iUwU3fyBg1ZGculm1jPpBautb4OGEzWjTW7l1j5aXdIBsRycrb2gPsA/qST11\nfiRLZ3raKSV9O7tnZQV1RPhEMCjnLSk54ALegGeQQqlNJjVLbmG9UDvor0p1C9oc\ncKZIF3+T5NHSvD3pjZX2f91NeIqqkOrZwu6r82q6YZ5eYwlD6Rbn0yXaou3eG6Tg\n9ucr2o4w+SGxaaDIp1NEtqrbZreyGMrZmQh0bA+hKrr3WqSW+XAHsLEfptGDihe4\nhh1Dku32zI8S1SizFoSHi++NhUFkp51BpfE4fB0If7C5mKCToLG32QO30moRfbbE\ngViSLg==\n-----END CERTIFICATE-----",
        homeUrl: "http://localhost:8080"
      },
      userStatus: 'APPROVED'
    })
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <main>
            <Route path='/' exact render={() => {
              return <Home status={this.state.userStatus}/>
            }}/>
            <Route path='/application' render={ ({history}) => {
              return <Application history={history}/>
            }}/>
            <Route path='/approval' render={ () => {
              return <Approval status={this.state.userStatus}/>
            }}/>
            <Route path={'/update'} render={ (history) => {
              return <Update user={this.state.userSelf} history={history}/>
            }}/>
          </main>
        </div>
      </HashRouter>
    );
  }
}

export default BCQApp;
