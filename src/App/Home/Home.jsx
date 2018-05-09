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
    let displayStyle = this.state.menuHidden? {}:{opacity: 1};

    return <Row>
      <Row className='half-padding-top home-menu-bar' style={displayStyle}>
        <Col xs={4} sm={4} md={3} lg={2}>
          <div>
            MENU 
            <span className='fa fa-bars fa-1x' onClick={this.onClickMenu.bind(this)}/> 
          </div> 
        </Col>
        <Col xs={7} sm={7} md={8} lg={9}>
          <StatusBar className='base-margin-right' status={this.props.status}/>
        </Col>
      </Row>
      <Menu display={this.state.showMenu} 
            status={this.props.status}
            onEnterEntry={this.handleOnEnterEntry.bind(this)}/>   
      <div className={`home-title ${this.state.inShort? 'short': ''}`}>
          <span>F</span>
          <span>e</span>
          <span>d</span>
          <span className='ghost'>e</span>
          <span className='ghost'>r</span>
          <span className='ghost'>a</span>
          <span className='ghost'>t</span>
          <span className='ghost'>i</span>
          <span className='ghost'>o</span>
          <span className='ghost'>n</span>
          
          <span className='spaced'>I</span>
          <span>n</span>
          <span>t</span>
          <span className='ghost'>e</span>
          <span className='ghost'>g</span>
          <span className='ghost'>r</span>
          <span className='ghost'>a</span>
          <span className='ghost'>t</span>
          <span className='ghost'>i</span>
          <span className='ghost'>o</span>
          <span className='ghost'>n</span>
        </div>
    </Row>
  }
}

export default Home;