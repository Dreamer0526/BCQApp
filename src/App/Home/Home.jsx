import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './Home.css';
import Menu from './Menu';
import StatusBar from '../Common/StatusBar'

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inShort: true,
      menuHidden: true,
      showMenu: false
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        inShort: false
      });
    }, 1000);
    
    setTimeout(() => {
      this.setState({
        menuHidden: false
      });
    }, 1500);
  }

  onClickMenu() {
    let showMenu = !this.state.showMenu
    this.setState({
      showMenu
    })
  }

  handleOnEnterEntry = () => {
    this.setState({showMenu: false})
  }

  render() {
    return <Row>
      <Row className='half-padding-top home-menu-bar'>
        <Col xs={4} sm={4} md={3} lg={2}>
          <div>
            <span className='fa fa-bars fa-1x half-margin-right' onClick={this.onClickMenu.bind(this)}/> 
            MENU 
          </div> 
        </Col>
        <Col xs={7} sm={7} md={8} lg={9}>
          <StatusBar className='base-margin-right' name={this.props.name} status={this.props.status}/>
        </Col>
      </Row>
      <Menu display={this.state.showMenu} 
            status={this.props.status}
            onEnterEntry={this.handleOnEnterEntry.bind(this)}/>
      <div className='home-title'>
        { this.props.name && <span className='font-20'> Hi, </span>}
        { this.props.name && <span className='color-orange company-name'> {this.props.name} </span> }
        { this.props.name && <br/> }
        <span className='font-20'> Welcome to </span>
        <br/>
        <span>Federation Integration</span>
      </div>
    </Row>
  }
}

export default Home;