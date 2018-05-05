import React, { Component } from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inShort: true
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        inShort: false
      });
  }, 1000);
  }

  render() {
    let applicationText = 'Application'
    let approvalText = 'Approval'
    let updateText = 'Update'

    return <Row className='dbl-padding-top dbl-margin-top'>
      <Row className='dbl-padding-top dbl-margin-top dbl-margin-bottom container-relative'>
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
      <Row className='dbl-padding-top container-relative'>
        <div className={`home-title home-menu ${this.state.inShort? 'short': ''}`}>
          { applicationText.split('').map( letter => {
            return <span className='ghost'>{letter}</span>
          })}
        </div>
      </Row>
      <Row className='dbl-padding-top container-relative'>
        <div className={`home-title home-menu ${this.state.inShort? 'short': ''}`}>
          { approvalText.split('').map( letter => {
            return <span className='ghost'>{letter}</span>
          })}
        </div>
      </Row>
      <Row className='dbl-padding-top container-relative'>
        <div className={`home-title home-menu ${this.state.inShort? 'short': ''}`}>
          { updateText.split('').map( letter => {
            return <span className='ghost'>{letter}</span>
          })}
        </div>
      </Row>
    </Row>

  }
}

export default Home;