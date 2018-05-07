import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inShort: true,
      menuHidden: true
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
    }, 2000);
  }

  render() {
    let displayStyle = this.state.menuHidden? {}:{opacity: 1};

    return <Row className='dbl-padding-top dbl-margin-top'>
      <Row className='dbl-padding-top dbl-margin-top base-margin-bottom container-relative'>
        <div className={`home-title ${this.state.inShort? 'short': ''}`}>
          <span>F</span>
          <span>e</span>
          <span>d</span>
          <span className='ghost'>e</span>
          <span className='ghost'>r</span>
          <span className='ghost'>a</span>
          <span className='ghost'>l</span>
          
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
      <Row className='half-padding-top container-relative'>
        <Col lg={6} lgOffset={3}>
          <Col lg={4} lgOffset={1}>
            <div className={`home-menu`} style={displayStyle}>
              <a href='#/application'>Application</a>
            </div>
          </Col>

          <Col lg={4} >
          
            <div className='home-menu' style={displayStyle}>
              <a href='#/approval'>Approval</a>
            </div>
          </Col>
          <Col lg={3} >
            <div className='home-menu' style={displayStyle}>
              <a href='#/update'>Update</a>
            </div>
          </Col>
        </Col>
      </Row>
    </Row>
  }
}

export default Home;