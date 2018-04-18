import React, { Component } from 'react';
import {
  Row, Col, Form, FormControl, InputGroup
} from 'react-bootstrap';
import './Application.css';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return <Row className='base-padding-top'>
      <Col xs={12} sm={10} smOffset={1} md={8} mdOffset={2} lg={6} lgOffset={3}>
        <Row>
          <h2>Application</h2>
        </Row>
        <Row className='base-margin-top'>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={8} mdOffset={2} lg={8} lgOffset={2}>
            <form className='base-padding-left base-padding-right'>
              <input  id='name'
                      class='hoverable'
                      type='text' 
                      placeholder='NAME'/>
              <input  id='url'
                      class='hoverable'
                      type='text'
                      placeholder='URL'/>
              <textarea id='message'
                        class='hoverable'
                        type='text'
                        placeholder='CERTIFICATE'/>
              <input  id='submit'
                      class='hoverable'
                      type='submit'
                      value='GO!'/>
            </form>
          </Col>
        </Row>
      </Col> 
    </Row>;
  }
}

export default Application;